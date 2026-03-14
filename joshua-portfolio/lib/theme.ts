import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'light' as const,
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  colors: {
    brand: {
      primary: '#1D4ED8',
      secondary: '#059669',
      navy: '#0F172A',
      navyLight: '#1E293B',
      surface: '#F8FAFC',
      muted: '#64748B',
      border: '#E2E8F0',
    },
  },
  styles: {
    global: {
      body: {
        bg: '#F8FAFC',
        color: '#0F172A',
        fontFamily: `var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
      },
      '*::selection': {
        bg: '#1D4ED8',
        color: 'white',
      },
    },
  },
  fonts: {
    heading: `var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
    body: `var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
    mono: `'Courier New', monospace`,
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: '600',
        borderRadius: '8px',
      },
    },
    Input: {
      variants: {
        outline: {
          field: {
            borderRadius: '8px',
            borderColor: '#E2E8F0',
            _hover: { borderColor: '#1D4ED8' },
            _focus: { borderColor: '#1D4ED8', boxShadow: '0 0 0 1px #1D4ED8' },
          },
        },
      },
    },
  },
})

export default theme
