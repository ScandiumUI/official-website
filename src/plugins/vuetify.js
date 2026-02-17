import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

const scandiumDark = {
  dark: true,
  colors: {
    'primary': '#9dd4ff',
    'on-primary': '#1a3050',
    'primary-container': '#243342',
    'on-primary-container': '#dceeff',

    'secondary': '#afd3ec',
    'on-secondary': '#1a3050',
    'secondary-container': '#2b3640',
    'on-secondary-container': '#dceeff',

    'tertiary': '#cc99ff',
    'on-tertiary': '#3d1a66',
    'tertiary-container': '#3a2d4a',
    'on-tertiary-container': '#eeddff',

    'error': '#ffb4ab',
    'on-error': '#690005',
    'error-container': '#93000a',
    'on-error-container': '#ffdad6',

    'background': '#1b1b22',
    'on-background': '#dceeff',
    'surface': '#1b1b22',
    'on-surface': '#dceeff',

    'surface-variant': '#3a4450',
    'on-surface-variant': '#bfcdd9',
    'outline': '#556677',
    'outline-variant': '#3a4450',

    'surface-bright': '#2b3640',
    'surface-dim': '#151518',
    'surface-container-lowest': '#131316',
    'surface-container-low': '#1f1f28',
    'surface-container': '#202028',
    'surface-container-high': '#2a2a35',
    'surface-container-highest': '#3a4450',
  },
}

const scandiumLight = {
  dark: false,
  colors: {
    'primary': '#1a6fa0',
    'on-primary': '#ffffff',
    'primary-container': '#d2e8ff',
    'on-primary-container': '#002e4e',

    'secondary': '#3d6580',
    'on-secondary': '#ffffff',
    'secondary-container': '#c4e0f5',
    'on-secondary-container': '#0e2d42',

    'tertiary': '#6b47a0',
    'on-tertiary': '#ffffff',
    'tertiary-container': '#eaddff',
    'on-tertiary-container': '#27004e',

    'error': '#ba1a1a',
    'on-error': '#ffffff',
    'error-container': '#ffdad6',
    'on-error-container': '#410002',

    'background': '#f8fbff',
    'on-background': '#191c20',
    'surface': '#f8fbff',
    'on-surface': '#191c20',

    'surface-variant': '#dee3eb',
    'on-surface-variant': '#42474e',
    'outline': '#72787e',
    'outline-variant': '#c2c7cf',

    'surface-bright': '#f8fbff',
    'surface-dim': '#d8dbe0',
    'surface-container-lowest': '#ffffff',
    'surface-container-low': '#f2f5fa',
    'surface-container': '#eceff4',
    'surface-container-high': '#e6e9ee',
    'surface-container-highest': '#e0e3e8',
  },
}

export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
  theme: {
    defaultTheme: 'scandiumDark',
    themes: {
      scandiumDark,
      scandiumLight,
    },
  },
})
