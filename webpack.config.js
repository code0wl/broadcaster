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
                loaders: [ 'babel-loader', 'eslint-loader' ],
                exclude: /node_modules/
            }
        ]
    }
};
