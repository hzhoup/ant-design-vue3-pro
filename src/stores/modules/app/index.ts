import { pinia } from '/@/stores'

interface Control {
  // 是否折叠侧边菜单
  sideCollapse: boolean
  // 当前语言
  locale: string
}

export const useAppStore = defineStore(
  'app-store',
  () => {
    const control = reactive<Control>({
      sideCollapse: false,
      locale: 'zh'
    })

    const token = ref<string>()

    function toggleSideCollapse() {
      control.sideCollapse = !control.sideCollapse
    }

    function changeLocale(key: string) {
      control.locale = key
    }

    return { ...toRefs(control), token, toggleSideCollapse, changeLocale }
  },
  {
    persist: true
  }
)

export function useAppStoreWithOut() {
  return useAppStore(pinia)
}
