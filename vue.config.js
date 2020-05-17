const path = require('path')
const { IgnorePlugin } = require('webpack')

const isProd = process.env.NODE_ENV === 'production'

const resolve = dir => {
  return path.join(__dirname, dir)
}

const assetsCDN = {
  externals: {
    vue: 'Vue',
    'vue-router': 'VueRouter',
    vuex: 'Vuex',
    axios: 'axios'
  },
  assets: {
    css: [],
    // https://unpkg.com/browse/vue@2.6.10/
    js: [
      '//cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js',
      '//cdn.jsdelivr.net/npm/vue-router@3.1.3/dist/vue-router.min.js',
      '//cdn.jsdelivr.net/npm/vuex@3.1.1/dist/vuex.min.js',
      '//cdn.jsdelivr.net/npm/axios@0.19.0/dist/axios.min.js'
    ]
  }
}

module.exports = {
  productionSourceMap: false,
  transpileDependencies: ['vue-awesome-swiper', 'swiper', 'dom7'],
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    }
  },
  configureWebpack: {
    plugins: [
      // Ignore all locale files of moment.js
      new IgnorePlugin(/^\.\/locale$/, /moment$/)
    ],
    resolve: {

    },
    externals: isProd ? assetsCDN.externals : {}
  },
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'WEB前端个人简历'
        return args
      })

    config.resolve.alias
      .set('@', resolve('src'))
      .set('~', resolve('src'))

    isProd && config.plugin('html').tap(args => {
      args[0].cdn = assetsCDN.assets
      return args
    })

  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, './src/assets/style/basic.scss'),
        path.resolve(__dirname, './src/assets/style/frames.scss'),
      ]
    }
  },
  css: {
    loaderOptions: {

    }
  }
}
