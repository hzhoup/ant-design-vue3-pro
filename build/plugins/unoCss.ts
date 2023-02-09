import { presetAttributify, presetUno } from 'unocss'
import unocss from 'unocss/vite'

export const setupUnoCss = () => {
  return unocss({
    presets: [presetUno({ dark: 'class' }), presetAttributify()],
    rules: [],
    theme: [],
    variants: [],
    shortcuts: {}
  })
}
