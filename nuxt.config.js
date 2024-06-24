import colors from 'vuetify/es5/util/colors'

export default {
  ssr: false,
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'Дитя Світла - %s',
    title: 'Стань одним з трьохсот — Даруй світло дітям',
    htmlAttrs: {
      lang: 'uk'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      { hid: 'description', name: 'description', content: 'Дитя Світла — дитячий будинок за принципом соціального підприємництва: 300 осіб щомісячними донатами по 1000 грн подарують квиток у повноцінне життя дітям-сиротам.' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'format-detection', content: 'address=no' },
      { name: 'keywords', content: 'дитячий будинок, дитя світла, донати, діти-сироти, ' },
      { name: 'author', content: 'Andrii Dubovyk' },
      { name: 'copyright', content: '(c) Дитя Світла' },

      { http_equiv: 'Cache-Control', content: 'no-cache' },
      { http_equiv: 'X-UA-Compatible', content: 'IE=edge' },

      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://writerme.io/' },
      { property: 'og:title', content: 'WriterMe - Great Ideas Start Here!' },
      { property: 'og:description', content: 'WriterMe is a comprehensive note-taking app supporting text, images, voice, audio, video, code, and tasks. It also functions as a bookmark manager, allowing organization into folders.' },
      { property: 'og:image', content: 'https://writerme.io/static/images/writerme.jpg' },

      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:url', content: 'https://writerme.io/' },
      { property: 'twitter:title', content: 'WriterMe - Great Ideas Start Here!' },
      { property: 'twitter:description', content: 'WriterMe is a comprehensive note-taking app supporting text, images, voice, audio, video, code, and tasks. It also functions as a bookmark manager, allowing organization into folders.' },
      { property: 'twitter:image', content: 'https://writerme.io/static/images/writerme.jpg' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
