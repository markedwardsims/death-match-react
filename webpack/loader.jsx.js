var path = require('path');

module.exports = {
    test: /\.jsx$/,
    include: [
        path.resolve(__dirname, "../", "app")
    ],
    loader: 'babel-loader',
    query: {
        presets: ['react', 'es2015']
    }
};