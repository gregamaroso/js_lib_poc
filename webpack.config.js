const path = require('path');
const webpack = require('webpack');
/**
 * `..` Since this config file is in the config folder so we need
 * to resolve path in the top level folder.
 */
const resolve = relativePath => path.resolve(__dirname, '..', relativePath);

module.exports = {
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        index: 'index.html',
        compress: false,
        port: 9000
    },
    output: {
        publicPath: '/'
    },
};