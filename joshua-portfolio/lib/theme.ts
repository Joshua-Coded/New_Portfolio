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
        bg: '#FFFFFF',
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
        _focus: { boxShadow: 'none' },
      },
    },
    Input: {
      variants: {
        outline: {
          field: {
            borderRadius: '8px',
            borderColor: '#E2E8F0',
            bg: 'white',
            _hover: { borderColor: '#1D4ED8' },
            _focus: { borderColor: '#1D4ED8', boxShadow: '0 0 0 1px #1D4ED8' },
          },
        },
      },
    },
    Textarea: {
      variants: {
        outline: {
          borderRadius: '8px',
          borderColor: '#E2E8F0',
          bg: 'white',
          _hover: { borderColor: '#1D4ED8' },
          _focus: { borderColor: '#1D4ED8', boxShadow: '0 0 0 1px #1D4ED8' },
        },
      },
    },
    Select: {
      variants: {
        outline: {
          field: {
            borderRadius: '8px',
            borderColor: '#E2E8F0',
            bg: 'white',
            _hover: { borderColor: '#1D4ED8' },
            _focus: { borderColor: '#1D4ED8', boxShadow: '0 0 0 1px #1D4ED8' },
          },
        },
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: 800,
        letterSpacing: '-0.025em',
      },
    },
  },
})

export default theme
