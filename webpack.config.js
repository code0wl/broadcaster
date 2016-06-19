const
    webpack = require('webpack'),
    path = require('path');

module.exports = {
    entry: './src/index',

    resolve: {
        extensions: ['', '.js']
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'frequency.min.js'
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: true
            }
        })
    ],

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};
