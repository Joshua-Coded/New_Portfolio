import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'dark' as const,
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  colors: {
    brand: {
      primary: '#3B82F6',    // professional blue
      secondary: '#10B981',  // emerald green
      navy: '#0C1220',       // deep charcoal-navy
      navyLight: '#1A2535',  // card/panel background
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
        color: 'white',
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
