import { create } from 'storybook/theming'

export default create({
  base: 'light',

  brandTitle: 'Quill Design System',
  brandImage: '/quill-logo.svg',
  brandUrl: '/',
  brandTarget: '_self',

  // App chrome
  appBg: '#F5EDDD',
  appContentBg: '#F5EDDD',
  appPreviewBg: '#F5EDDD',
  appBorderColor: 'rgba(42,38,34,0.12)',
  appBorderRadius: 8,

  // Toolbar
  barBg: '#EFE4CE',
  barTextColor: '#5C524A',
  barSelectedColor: '#C4684B',
  barHoverColor: '#2A2622',

  // Colors
  colorPrimary: '#C4684B',
  colorSecondary: '#C4684B',

  // Typography
  fontBase: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
  fontCode: 'ui-monospace, "SF Mono", Menlo, monospace',

  // Text
  textColor: '#2A2622',
  textMutedColor: '#8A7F72',
  textInverseColor: '#F5EDDD',

  // Form
  inputBg: '#EFE4CE',
  inputBorder: 'rgba(42,38,34,0.15)',
  inputTextColor: '#2A2622',
  inputBorderRadius: 6,
})
