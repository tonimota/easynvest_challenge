const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    index: './src/index.js'
  },
  devServer: {
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  node: 'current'
                }
              }
            ]
          ]
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[path][name].[ext]?hash=[hash:20]',
              esModule: false,
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true,
      chunks: ['index'],
      filename: 'index.html'
    })
  ]
};
