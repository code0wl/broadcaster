const
    webpack = require('webpack');

module.exports = {
    entry: './src/index.js',

    resolve: {
        extensions: ['', '.js']
    },

    output: {
        path: './dist',
        filename: 'frequency.min.js'
    },

    plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: true
        //     }
        // })
    ],

    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            }
        ],

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
