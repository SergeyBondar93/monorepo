/* eslint-disable global-require */
const path = require('path');

const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const { configCreator, paths } = require('@xcritical/webpack-conf');




const analysisPlugins = process.env.ANALYZE ? [
  new DuplicatePackageCheckerPlugin(),
  new BundleAnalyzerPlugin(),
] : [];

module.exports = ({
  projectConfig,
}) => {

  return configCreator({
    loaders: [
      {
        test: /\.csv$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
    ],
    development: {
      publicPath: projectConfig.publicPath,
    },
    production: {
      publicPath: projectConfig.publicPath,
    },
    aliases: {
      production: {
        'react-dom': '@hot-loader/react-dom',
      },
    },
    isBabelDebug: false,
    plugins: {
      common: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
          path.join(paths.PUBLIC_DIR, 'manifest.json'),
        ]),
        new ScriptExtHtmlWebpackPlugin({
          async: /\.js$/,
          preload: {
            test: /\.js$/,
          },
        }),
      ],
      dev: [
        new webpack.DefinePlugin({
          APP_PATH: JSON.stringify(projectConfig.publicPath.replace(/\/$/, '')),
        }),
      ],
    },
    devServer: {
      host: 'localhost',
      disableHostCheck: true,
      openPage: projectConfig.publicPath.replace('/', ''),
      hot: true,
    },
  });
};
