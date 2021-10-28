import path from 'path'

export default {
  generate: {
    fallback: true,
  },
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Auditor PWA',
    htmlAttrs: {
      lang: 'ru',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'maximum-scale=1.0, user-scalable=0, width=device-width, initial-scale=1',
      },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: '#fff' },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'default',
      },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  pwa: {
    manifest: {
      lang: 'ru',
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main.css', 'normalize.css/normalize.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/persistedstate.js',
    '~/plugins/shortkey.js',
    '~/plugins/chatscroll.js',
    '~/plugins/toast.js',
    '~plugins/bus.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://new.21baza.ru/',
    headers: {
      post: {
        'content-type': 'application/json;charset=utf-8',
      },
    },
    retry: { retries: 2 },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        'postcss-import': {},
        'postcss-each': {},
        'postcss-extend-rule': {},
        'postcss-nested-ancestors': {},
        'postcss-nested': {},
        'postcss-css-variables': {},
        'postcss-preset-env': {},
        'postcss-move-props-to-bg-image-query': {},
        'postcss-custom-media': {},
        'postcss-inline-svg': {
          paths: [path.join(__dirname, './assets/svg/')],
          removeFill: true,
        },
        cssnano: {
          preset: 'default',
        },
      },
    },
  },
}
