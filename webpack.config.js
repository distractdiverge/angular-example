const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        use: [{
          loader: 'css-loader'
        }, {
          loader: 'sass-loader',
          options: {
            includePaths: [
              'node_modules/bourbon/app/assets/stylesheets',
              'node_modules/bourbon-neat/core'
            ],
          }
        }],
      }),
    }],
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
  ]
};
