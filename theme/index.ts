import { extendTheme } from '@chakra-ui/react'
import { theme } from '@saas-ui/react'

import components from './components'
import { fontSizes } from './foundations/typography'

import '@fontsource/inter/variable.css'

const styles = {
  global: (props: any) => ({
    body: {
      color: 'gray.900',
      bg: 'white',
      fontSize: 'lg',
      _dark: {
        color: 'white',
        bg: 'gray.900',
      },
    },
  }),
}

const colors = {
  primary: {
    50: '#FFF5F5',
    100: '#FED7D7',
    200: '#FEB2B2',
    300: '#FC8181',
    400: '#F56565',
    500: '#E53E3E',
    600: '#C53030',
    700: '#9B2C2C',
    800: '#822727',
    900: '#63171B',
  },
}

export default extendTheme(
  {
    config: {
      initialColorMode: 'dark',
      useSystemColorMode: false,
    },
    styles,
    fontSizes,
    components,
    colors,
  },
  theme
)
