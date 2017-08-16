var path = require('path');

module.exports = {

    // directories
    App: path.resolve(__dirname, '../', 'app'),
    Components: path.resolve(__dirname, '../', 'app/components'),
    Containers: path.resolve(__dirname, '../', 'app/containers'),

    // redux
    Actions: path.resolve(__dirname, '../', 'app/actions'),
    Constants: path.resolve(__dirname, '../', 'app/constants'),
    Reducers: path.resolve(__dirname, '../', 'app/reducers'),

    // deathmatch components directory
    dmc: path.resolve(__dirname, '../', 'node_modules/deathmatch-components/dist'),
    iconsLocation: path.resolve(__dirname, '../', 'node_modules/deathmatch-components/dist/components/icons')

};