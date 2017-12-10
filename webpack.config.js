var webpack = require('webpack');
var path = require('path');

module.exports = {
    devServer:{
        historyApiFallback:true
    },
    context: __dirname + '/src',
    entry: './js/root.jsx',
    output: {
        path: __dirname + '/src',
        filename: './bundle.js'
    },
    module: {
        loaders:[
            {
                test: /\.js?$|.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss?$/,
                exclude: /(node_modules)/,
                loaders: ['style-loader','css-loader','sass-loader'],
            }
        ]
    },
    
}