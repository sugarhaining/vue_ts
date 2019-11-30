const merge = require('webpack-merge');
const tsImportPluginFactory = require('ts-import-plugin');

module.exports = {
  parallel: false,
  outputDir: './dist',
  publicPath: process.env.NODE_ENV === 'production' ? '/vant-demo/' : '/',
  chainWebpack: config => {
    config.module
      .rule('ts')
      .use('ts-loader')
      .tap(options => {
        options = merge(options, {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory({
                libraryName: 'vant',
                libraryDirectory: 'es',
                style: true
              })
            ]
          }),
          compilerOptions: {
            module: 'es2015'
          }
        });
        return options;
      });
      config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
          options.transpileOptions = {
          transforms: {
              dangerousTaggedTemplateString: true,
          },
        }
          return options
      });
      config.module
      .rule('gql')
      .test(/\.gql$/)
      .use('graphql-tag/loader')
      .loader('graphql-tag/loader')
      .end()

      const oneOfsMap = config.module.rule('scss').oneOfs.store;
      oneOfsMap.forEach(item => {
        item
          .use('sass-resources-loader')
          .loader('sass-resources-loader')
          .options({
            resources: './src/styles/common.scss',
          })
          .end()
      })
  },
  pluginOptions: {
    apollo: {
      enableMocks: false,
      enableEngine: false
    }
  }
};
