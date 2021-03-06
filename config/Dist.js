'use strict';

const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

const WebpackBaseConfig = require('./Base');

class WebpackDistConfig extends WebpackBaseConfig {
  constructor() {
    super();
    this.config = {
      cache: false,
      devtool: 'source-map',
      entry: {
        'canvas-clip':'./index.ts',
        test:'./test.ts'
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': '"production"'
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new htmlWebpackPlugin({
          template: 'index.html',
          chunks: ['test'],
          minify: {
            removeComments: true
          }
        })
      ]
    };
  }

  get env() {
    return 'dist';
  }
}
module.exports = WebpackDistConfig;
