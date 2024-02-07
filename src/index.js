import createPlugin from 'tailwindcss/plugin'
import theme from './theme'

/** @type { import('tailwindcss/types/config').pluginCreator} */
const pluginCreator = api => {
  console.log('plugin-creator')
}

/** @type { import('tailwindcss/types/config').Config} */
const pluginConfig = { theme }

export default createPlugin(pluginCreator, pluginConfig)
