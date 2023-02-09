import { presetAttributify, presetUno } from 'unocss'
import unocss from 'unocss/vite'

export const setupUnoCss = () => {
  return unocss({
    presets: [presetUno({ dark: 'class' }), presetAttributify()],
    rules: [],
    theme: [],
    variants: [],
    shortcuts: {
      'wh-full': 'w-full h-full',
      'flex-center': 'flex justify-center items-center',
      'flex-col-center': 'flex-center flex-col',
      'flex-x-center': 'flex justify-center',
      'flex-y-center': 'flex items-center',
      'flex-col': 'flex flex-col',
      'fixed-lt': 'fixed left-0 top-0',
      'fixed-lb': 'fixed left-0 bottom-0',
      'fixed-rt': 'fixed right-0 top-0',
      'fixed-rb': 'fixed right-0 bottom-0',
      'fixed-tl': 'fixed-lt',
      'fixed-tr': 'fixed-rt',
      'fixed-bl': 'fixed-lb',
      'fixed-br': 'fixed-rb',
      'fixed-center': 'fixed-lt flex-center wh-full'
    }
  })
}
