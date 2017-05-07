var webpack = require('webpack');
var es6 = require('es6-promise').polyfill();
var path = require('path');
export default{
    debug: true,
    devtool:'cheap-module-eval-source-map',
    noInfo:false,
    entry:[
        'eventsource-polyfill',//needed with hot reload IE
         'babel-polyfill',
        'webpack-dev-server/client?http://localhost:8088',
        'webpack/hot/only-dev-server',
        './src/index.js'
    ]
}