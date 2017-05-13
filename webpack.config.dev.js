var webpack = require('webpack');
var path = require('path');
export default{
    devtool:'inline-source-map',
    entry:[
        'eventsource-polyfill',//needed with hot reload IE
         'webpack-hot-middleware/client?reload=true',//note that if reload fails it reloads whole page
         path.resolve(__dirname,'src/index')
    ],
    target:'web',
    output:{
        path:__dirname + '/dist',//physical files are only output in production build
        publicPath:'/',
        filename:'bundle.js'
    },
    devServer:{
        contentBase:path.resolve(__dirname,'src')
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ],
    module:{
        loaders:[
            {test:/\.js$/, include:path.join(__dirname,'src'),loaders:['babel-loader']},
            {test:/(\.css)$/,loaders:['style-loader','css-loader']},
            {test:/\.eot(\?v=\d+\.\d+\.\d+)?$/,loader:'file-loader'},
            {test:/\.(woff|woff2)$/,loader:'url-loader?prefix=font/&limit=5000'},
            {test:/\.ttf(\?v=\d+\.\d+\.\d+)?$/,loader:'url-loader?limit=10000&mime=application/octet-stream'},
            {test:/\.svg(\?v=\d+\.\d+\.\d+)?$/,loader:'url-loader?limit=10000&mime=image/svg+xml'}
        ]
    }
};
