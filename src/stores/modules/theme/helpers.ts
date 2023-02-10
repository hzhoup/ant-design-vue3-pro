import { addColorAlpha, getColorPalette } from '/@/stores/modules/theme/utils'
import { GlobalThemeOverrides } from 'naive-ui'
import { Colors } from './index'

interface ActionItem {
  scene: string
  handler: (color: string) => string
}

const actions: ActionItem[] = [
  { scene: '', handler: color => color },
  { scene: 'Suppl', handler: color => color },
  { scene: 'Hover', handler: color => getColorPalette(color, 5) },
  { scene: 'Pressed', handler: color => getColorPalette(color, 7) },
  { scene: 'Active', handler: color => addColorAlpha(color, 0.1) }
]

/**
 * 获取 naive theme overrides
 * @param {Colors} colors
 * @returns {GlobalThemeOverrides}
 */
export function getNaiveThemeOverrides(colors: Colors): GlobalThemeOverrides {
  const { primary } = colors

  const themeColors = getThemeColors(colors)
  const colorLoading = primary

  return {
    common: { ...themeColors },
    LoadingBar: { colorLoading }
  }
}

export function getThemeColors(colors: Colors) {
  const result: Record<string, string> = {}

  for (const key in colors) {
    actions.forEach(action => {
      const value = colors[key]
      const k = `${key}Color${action.scene}`
      result[k] = action.handler(value)
    })
  }

  return result
}
