import colors from 'vuetify/es5/util/colors'

export default {
  ssr: false,
  target: 'static',

  head: {
    titleTemplate: 'Дитячий будинок "Дитя Світла" - %s',
    title: 'Даруй світло дітям',
    htmlAttrs: {
      lang: 'uk'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      { hid: 'description', name: 'description', content: 'Дитя Світла — дитячий будинок за принципом соціального підприємництва: 300 осіб щомісячними донатами по 1000 грн подарують квиток у повноцінне життя дітям-сиротам.' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'format-detection', content: 'address=no' },
      { name: 'keywords', content: 'дитячий будинок "Дитя Світла", дитячий будинок, донати, діти-сироти' },
      { name: 'author', content: 'Andrii Dubovyk' },
      { name: 'copyright', content: '(c) Дитя Світла' },

      { http_equiv: 'Cache-Control', content: 'no-cache' },
      { http_equiv: 'X-UA-Compatible', content: 'IE=edge' },

      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://dytyasvitla.com.ua/' },
      { property: 'og:title', content: 'Дитячий будинок "Дитя Світла" — Даруй світло дітям!' },
      { property: 'og:description', content: 'Дитя Світла — дитячий будинок за принципом соціального підприємництва: 300 осіб щомісячними донатами по 1000 грн подарують квиток у повноцінне життя дітям-сиротам.' },
      { property: 'og:image', content: 'https://dytyasvitla.com.ua/viz1.jpg' },

      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:url', content: 'https://dytyasvitla.com.ua/' },
      { property: 'twitter:title', content: 'Дитячий будинок "Дитя Світла" — Даруй світло дітям!' },
      { property: 'twitter:description', content: 'Дитя Світла — дитячий будинок за принципом соціального підприємництва: 300 осіб щомісячними донатами по 1000 грн подарують квиток у повноцінне життя дітям-сиротам.' },
      { property: 'twitter:image', content: 'https://dytyasvitla.com.ua/viz1.jpg' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' }
    ]
  },

  router: {
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else if (to.hash) {
        return {
          selector: to.hash,
          behavior: 'smooth',
        };
      } else {
        return { x: 0, y: 0 };
      }
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~layouts/global.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/video-player.js'
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
    treeShake: true,
    defaultAssets: {
      font: {
        family: 'Onest'
      }
    },
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
  },

  server: {
    host: "0.0.0.0"
  }
}
