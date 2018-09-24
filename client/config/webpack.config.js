const webpack = require('webpack');
const path = require('path');
const resolve = require('./webpack.config.resolve');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/index.jsx',
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: 'bundle.js',
  },

  /**
   * Determine the array of extensions that should be used to resolve modules.
   */
  resolve,

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          fix: true,
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: './public',
    historyApiFallback: true,
    hot: true,
    host: '0.0.0.0',
    port: 3000,
    proxy: {
      '/api': 'http://aspiritywebtemplate_server:8080',
      '/uploads': 'http://aspiritywebtemplate_server:8080',
    },
  },
};
