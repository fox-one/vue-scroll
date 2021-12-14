'use strict';
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /.(js|jsx|ts|tsx)$/,
        use: [
          {loader: 'babel-loader'}
        ],
        exclude: /node_modules/
      },
      {
        test: /.(woff|woff2|eot|ttf|svg|jpg|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'assets/[name].[ext]'
            }
          }
        ]
      },
      
      {
        test: /.(css|scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }

    ],
  },
  plugins: [],
  mode: 'development',
  resolve: {
    alias: {
      '@utils': path.resolve(__dirname, '../src/utils')
    },
    extensions: [".ts", ".tsx", ".js", ".jsx", ".md", ".scss", ".css", ".sass"]
  }
};
