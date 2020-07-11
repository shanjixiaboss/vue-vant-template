const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

module.exports = {
  outputDir: 'dist',
  publicPath: './',
  assetsDir: 'static',
  productionSourceMap: false,
  devServer: {
    // development server port 8000
    // port: 8000,
    // proxy: {
    //   "/api": {
    //     // target: "http://xx.xx.xx.xx:xxxx/",
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': '/'
    //     }
    //   }
    // }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 37.5,
            propList: ['*'],
            selectorBlackList: ['van']
          })
        ]
      }
    }
  }
};
