import { useAppStore } from '/@/stores'
import { MaybeRef, UseFetchReturn } from '@vueuse/core'
import { isObject } from 'lodash-es'
import { LocationQueryRaw, stringifyQuery } from 'vue-router'

const useRequest = createFetch({
  baseUrl: import.meta.env.VITE_BASE_URL,
  options: {
    immediate: false,
    timeout: 30000,
    beforeFetch({ options }) {
      const app = useAppStore()

      options.headers = Object.assign(options.headers || {}, {
        Authorization: app.token
      })

      return { options }
    },
    afterFetch({ data, response }) {
      const app = useAppStore()
      const status = data.code

      switch (status) {
        case 200:
          data = data.data || {}
          break
        case 401:
          app.token = undefined
          window.$message?.error(data.message || '登录过期')
          data = null
          break
        default:
          window.$message?.error(data.message || '请求错误, 请稍后重试')
          data = null
      }

      import.meta.env.MODE === 'development' && console.log('result: ', data)

      return { data, response }
    },
    onFetchError({ data, error }) {
      console.error(error)
      data = undefined
      return { data, error }
    }
  },
  fetchOptions: {
    mode: 'cors'
  }
})

/**
 * 封装 GET 请求
 * @param url 请求地址
 * @param query 请求参数
 */
export function useGet<T = unknown>(url: MaybeRef<string>, query?: MaybeRef<unknown>): UseFetchReturn<T> {
  const _url = computed(() => {
    const _url = unref(url)
    const _query = unref(query)
    const queryString = isObject(_query) ? stringifyQuery(_query as LocationQueryRaw) : _query || ''
    return `${_url}${queryString ? '?' : ''}${queryString}`
  })

  return useRequest<T>(_url).json()
}

/**
 * 封装 post 请求
 * @param url 请求地址
 * @param payload 请求参数
 */
export function usePost<T = unknown>(url: MaybeRef<string>, payload?: MaybeRef<unknown>): UseFetchReturn<T> {
  return useRequest<T>(url).post(payload).json()
}

/**
 * 封装 put 请求
 * @param url 请求地址
 * @param payload 请求参数
 */
export function usePut<T = unknown>(url: MaybeRef<string>, payload?: MaybeRef<unknown>): UseFetchReturn<T> {
  return useRequest<T>(url).put(payload).json()
}

/**
 * 封装 delete 请求
 * @param url 请求地址
 * @param payload 请求参数
 */
export function useDelete<T = unknown>(url: MaybeRef<string>, payload?: MaybeRef<unknown>): UseFetchReturn<T> {
  return useRequest<T>(url).delete(payload).json()
}

/**
 * 封装获取Blob进行下载
 * @param url 请求地址
 */
export function useBlob(url: MaybeRef<string>): UseFetchReturn<Blob> {
  return useRequest(url).blob()
}
