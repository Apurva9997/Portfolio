var webpack = require('webpack');
var path = require('path');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const WebpackAssetsManifest = require('webpack-manifest-plugin');
const CopyPlugin = require('copy-webpack-plugin');

var env = 'production';

module.exports = {
  mode: env,
  entry: path.join(__dirname, './index.js'),
  output: {
    filename: '[name].bundle.[hash].js',
    chunkFilename: '[name].bundle.[hash].js',
    path: path.join(__dirname, '/build'),
    publicPath: '/'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          // cacheGroupKey here is `commons` as the key of the cacheGroup
          name(module, chunks, cacheGroupKey) {
            const moduleFileName = module
              .identifier()
              .split('/')
              .reduceRight(item => item);
            const allChunksNames = chunks.map(item => item.name).join('~');
            return `${cacheGroupKey}-${allChunksNames}-${moduleFileName}`;
          },
          chunks: 'all'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'babel-loader',
        options: {
          plugins: [['styled-components', { ssr: true }]]
        }
      },
      {
        test: /\.svg(\?.*)?$/, // match img.svg and img.svg?param=value
        use: [
          'url-loader', // or file-loader or svg-url-loader
          'svg-transform-loader'
        ]
      },
      {
        test: /\.scss$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new MomentLocalesPlugin(),
    new webpack.EnvironmentPlugin({

    }),
    new WebpackAssetsManifest({
      fileName: 'asset-manifest.json'
    }),
    new HtmlWebpackPlugin({
      title: 'Apurva - Portfolio',
      template: 'public/main.html',
      filename: 'main.html',
      minify: {
        collapseWhitespace: false,
        removeComments: true,
        useShortDoctype: false
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css'
    }),
    new CopyPlugin([
      {
        from: 'assets',
        to: 'assets'
      }
    ]),

    // new reactLoadablePlugin({
    //   filename: './react-loadable.json'
    // }),
    new InterpolateHtmlPlugin({
      // NODE_ENV: 'production',
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, '/build'),
    filename: 'main.html',
    compress: true,
    port: 9000,
    historyApiFallback: true
  }
};
