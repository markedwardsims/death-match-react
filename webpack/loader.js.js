var path = require('path');

module.exports = {
    test: /\.js$/,
    include: [
        path.resolve(__dirname, "../", "app"),
    ],
    loader: 'babel-loader',
    query: {
        presets: ['es2015']
    }
};