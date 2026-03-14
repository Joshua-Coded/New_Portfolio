import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'light' as const,
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  colors: {
    brand: {
      primary: '#2563EB',    // blue-600
      secondary: '#059669',  // emerald-600
      navy: '#0F172A',       // headings & dark text
      navyLight: '#1E293B',
      surface: '#F8FAFC',    // page background
      card: '#FFFFFF',       // card background
      muted: '#64748B',      // secondary text
      border: '#E2E8F0',     // card borders
    },
  },
  styles: {
    global: {
      body: {
        bg: '#F8FAFC',
        color: '#0F172A',
      },
      '*::selection': {
        bg: '#2563EB',
        color: 'white',
      },
    },
  },
  fonts: {
    heading: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
    body: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
    mono: `'Courier New', monospace`,
  },
})

export default theme
