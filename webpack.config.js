const path = require('path');
var DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
  entry: './app/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist/assets'),
    publicPath: '/assets',
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      { 
        test: /\.js$/, 
        use: ['babel-loader', 'eslint-loader'], 
        exclude: /node_modules/,
      },
      { 
        test: /\.jsx$/, 
        use: ['babel-loader', 'eslint-loader'], 
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, './app'),
  },
  plugins: [
    new DashboardPlugin(),
  ],
};
