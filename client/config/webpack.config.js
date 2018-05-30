const webpack = require('webpack');
// const HtmlWebPackPlugin = require('html-webpack-plugin');

// const htmlPlugin = new HtmlWebPackPlugin({
//   template: './public/index.html',
//   filename: './index.html'
// });


module.exports = {
  entry: [
    'react-hot-loader/patch',
    './index.js'
  ],
  output: {
    path: `${__dirname  }public`,
    publicPath: '/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './public',
    historyApiFallback: true,
    hot: true,
    host: '0.0.0.0',
    port: 3000,
    proxy: {
      '/api':  'http://aspiritywebtemplate_server:8080'
    },
  }
};
