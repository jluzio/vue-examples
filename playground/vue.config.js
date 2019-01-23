// vue.config.js
module.exports = {
  // ...
  devServer: {
    // open: process.platform === 'darwin',
    // host: '0.0.0.0',
    port: 4040 // CHANGE YOUR PORT HERE!
    // https: false,
    // hotOnly: false,
  },

  // ...
  configureWebpack: {
    devtool: 'source-map'
  },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'i18n',
      enableInSFC: false
    }
  }
}
