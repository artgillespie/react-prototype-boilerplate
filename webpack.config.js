var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './index',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: __dirname,
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'],
      },
      {
        test: /\.less$/,
        loaders: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.svg$/,
        loaders: ['file-loader'],
      },
      {
        test: /\.ttf$/,
        loader: 'file-loader',
      },
      {
        test: /\.woff2$/,
        loader: 'file-loader',
      },
      {
        test: /\.woff$/,
        loader: 'file-loader',
      },
      {
        test: /\.eot$/,
        loader: 'file-loader',
      },
    ],
  },
}
