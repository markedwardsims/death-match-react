var webpack = require('webpack');
var path = require('path');
var jsLoader = require('./webpack/loader.js.js');
var jsxLoader = require('./webpack/loader.jsx.js');
var cssLoader = require('./webpack/loader.css.js');
var scssLoader = require('./webpack/loader.scss.js');
var svgLoader = require('./webpack/loader.svg.js');
var alias = require('./webpack/alias.js');
var extensions = require('./webpack/extensions.js');

module.exports = {
    entry: ['babel-polyfill', './app/main.jsx'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'deathmatchApp.js'
    },
    resolve: {
        alias: alias,
        extensions: extensions
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                include: [
                    path.resolve(__dirname, "../", "app")
                ],
                loader: 'babel-loader',
                options: {
                    query: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.jsx$/,
                include: [
                    path.resolve(__dirname, "../", "app")
                ],
                loader: 'babel-loader',
                options: {
                    query: {
                        presets: ['react', 'es2015']
                    }
                },
            },
            cssLoader,
            scssLoader,
            svgLoader
        ]
    },
    plugins: [],
    devtool: 'cheap-module-source-map'
};