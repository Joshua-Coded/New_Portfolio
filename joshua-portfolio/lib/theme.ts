import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'dark' as const,
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  colors: {
    brand: {
      primary: '#22d3ee',
      secondary: '#84cc16',
      navy: '#0f172a',
      navyLight: '#1e293b',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'brand.navy',
        color: 'whiteAlpha.900',
      },
      '*::selection': {
        bg: 'brand.primary',
        color: 'brand.navy',
      },
    },
  },
  fonts: {
    heading: `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
    body: `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
    mono: `'Courier New', monospace`,
  },
})

export default theme
