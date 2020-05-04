// vue.config.js
module.exports = {
  publicPath: process.env.VUE_APP_APP_PATH,
  devServer: {
    port: 4000
  },
  configureWebpack: {
    devtool: process.env.NODE_ENV === 'production' ? undefined : 'source-map'
  }
}
