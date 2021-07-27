const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const baseConfig = require('./webpack.base');

module.exports = merge(baseConfig, {
  mode: 'development',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.[contenthash:4].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  devtool: 'source-map',
  devServer: {
    open: true,
    host: '0.0.0.0',
    useLocalIp: true,
  },
  target: 'web',
});
