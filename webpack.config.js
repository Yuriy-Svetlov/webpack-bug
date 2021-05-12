"use strict";

const path = require('path');

module.exports = {	
  mode: 'development',	
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
  	https: false,
  	liveReload: false,
  	hot: false,
  	overlay: false,
    contentBase: './dist',   
  }, 
}