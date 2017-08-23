'use strict';

const { join } = require('path');
const nodeExternals = require('webpack-node-externals');

const include = join(__dirname, 'lib');

module.exports = {
    entry: [ './lib/index.js' ],
    output: {
        path: join(__dirname, 'dist'),
        libraryTarget: 'umd',
        library: 'RetailPointSDK'
    },
    devtool: 'source-map',
    externals: [ nodeExternals() ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include
            },
            {
                test: /\.json$/,
                loader: 'json',
                include
            }
        ]
    }
};
