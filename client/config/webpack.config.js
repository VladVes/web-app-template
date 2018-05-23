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
    path: __dirname + 'public',
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
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './public',
    hot: true
  }
  // eslint: { configFile: '.eslintrc' }
};
