const path = require('path');
const webpack = require('webpack');
const rxPaths = require('rxjs/_esm5/path-mapping');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    main: path.resolve(__dirname, './src/main.js'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
  },
  resolve: {
    alias: rxPaths(),
  },
  module: {
    rules: [
      {
        test: path.resolve(__dirname, "node_modules/rxjs"),
        sideEffects: false
      },
    ]
  },
};
