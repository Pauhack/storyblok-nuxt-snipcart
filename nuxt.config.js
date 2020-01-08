const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href:'href="https://cdn.snipcart.com/themes/v3.0.5/default/snipcart.css'}
    ],
    script: [
      { src: 'https://cdn.snipcart.com/themes/v3.0.5/default/snipcart.js', id: 'snipcart', 'data-api-key': 'MWJkMjliMGEtMTU4ZC00YzJhLThiMTAtNThhZTA1ZTAyYmZlNjM2OTczNTk3MTAwMTE0MTEz'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/components',
    '~/plugins/filters'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ['storyblok-nuxt', {accessToken: 'STyznRrDzGco2xm8BMI76Qtt', cacheProvider: 'memory'}]
  ],

  /*
  ** Router middleware
  */
  router: {
    middleware: 'setCacheVersion'
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}
