import { getNaiveThemeOverrides } from '/@/stores/modules/theme/helpers'
import { useToggle } from '@vueuse/core'
import { darkTheme } from 'naive-ui'

// 色彩
export interface Colors {
  primary: string
  info: string
  success: string
  warning: string
  error: string

  [key: string]: string
}

export const useThemeStore = defineStore(
  'theme-store',
  () => {
    const colors = reactive<Colors>({
      primary: '#1890FF',
      info: '#0099AD',
      success: '#52C41A',
      warning: '#fAAD14',
      error: '#f5222D'
    })

    const darkMode = useDark()

    const naiveThemeOverrides = computed(() => {
      return getNaiveThemeOverrides(colors)
    })

    const naiveTheme = computed(() => {
      return darkMode.value ? darkTheme : undefined
    })

    const toggleDark = useToggle(darkMode)

    return { ...toRefs(colors), darkMode, naiveTheme, naiveThemeOverrides, toggleDark }
  },
  {
    persist: true
  }
)
