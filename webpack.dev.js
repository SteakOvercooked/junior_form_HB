const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const tsxRule = {
  test: /\.(ts|js)x?$/,
  use: [
    {
      loader: 'babel-loader',
    },
  ],
  exclude: /node_modules/,
};

const cssRule = {
  test: /\.s?css$/,
  use: [
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        importLoaders: 2,
        modules: {
          auto: /\.module\.s?css$/,
          localIdentName: '[local]_[hash:base64:5]',
        },
      },
    },
    'postcss-loader',
    'sass-loader',
  ],
};

module.exports = {
  devtool: 'eval-source-map',
  mode: 'development',
  devServer: {
    port: 3000,
  },
  entry: {
    index: './src/index.tsx',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
  module: {
    rules: [tsxRule, cssRule],
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.scss'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      title: 'HB Form',
      template: '!!pug-loader!' + path.resolve(__dirname, 'src', 'index.pug'),
    }),
  ],
};
