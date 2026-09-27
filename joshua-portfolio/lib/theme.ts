import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'light' as const,
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  colors: {
    // "Sahel Dusk" — charcoal-green surface, ochre primary accent, terracotta
    // secondary accent. Replaces the previous navy/indigo/green system.
    brand: {
      primary: '#A6631D',      // golden ochre — CTAs, hero emphasis word, links
      primaryDark: '#8F551A',  // gradient/hover start, or accent text on light bg
      primaryLight: '#C17817', // gradient/hover end, lighter tint
      primaryTint: '#D9A056',  // light ochre for text/icons on dark surfaces
      secondary: '#A8492B',    // burnt terracotta — secondary accent
      secondaryDark: '#8A3B22',
      secondaryLight: '#C2624A',
      navy: '#1B2620',         // deep charcoal-green dark surface (was navy blue)
      navyLight: '#243530',
      surface: '#F8F7F4',      // warm off-white base
      muted: '#6B6058',        // warm muted text
      border: '#E3DCCF',       // warm border/divider
      status: '#5B7A4B',       // moss green — "available" status dot only
    },
  },
  styles: {
    global: {
      body: {
        bg: '#F8F7F4',
        color: '#211B16',
        fontFamily: `var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
      },
      '*::selection': {
        bg: '#A6631D',
        color: 'white',
      },
    },
  },
  fonts: {
    heading: `var(--font-newsreader), Georgia, 'Times New Roman', serif`,
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
            borderColor: '#E3DCCF',
            bg: 'white',
            _hover: { borderColor: '#A6631D' },
            _focus: { borderColor: '#A6631D', boxShadow: '0 0 0 1px #A6631D' },
          },
        },
      },
    },
    Textarea: {
      variants: {
        outline: {
          borderRadius: '8px',
          borderColor: '#E3DCCF',
          bg: 'white',
          _hover: { borderColor: '#A6631D' },
          _focus: { borderColor: '#A6631D', boxShadow: '0 0 0 1px #A6631D' },
        },
      },
    },
    Select: {
      variants: {
        outline: {
          field: {
            borderRadius: '8px',
            borderColor: '#E3DCCF',
            bg: 'white',
            _hover: { borderColor: '#A6631D' },
            _focus: { borderColor: '#A6631D', boxShadow: '0 0 0 1px #A6631D' },
          },
        },
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: 600,
        letterSpacing: '-0.015em',
      },
    },
  },
})

export default theme
