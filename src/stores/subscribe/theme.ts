import { useThemeStore } from '/@/stores'
import { kebabCase } from 'lodash-es'

const DARK_CLASS = 'dark'

export default function subscribeThemeStore() {
  const theme = useThemeStore()
  const scope = effectScope()

  scope.run(() => {
    /**
     * 监听 naive theme
     */
    watch(
      () => theme.naiveThemeOverrides,
      newValue => {
        if (newValue.common) addThemeCssVarsToHtml(newValue.common)
      },
      { immediate: true }
    )
  })

  onScopeDispose(() => {
    scope.stop()
  })
}

/**
 * 将 theme 添加到 HTML CSS var
 * @param {Record<string, string>} colors
 */
function addThemeCssVarsToHtml(colors: Record<string, string>) {
  const style: string[] = []
  Object.keys(colors).forEach(key => {
    style.push(`--${kebabCase(key)}: ${colors[key]}`)
  })
  const styleStr = style.join(';')
  document.documentElement.style.cssText += styleStr
}
