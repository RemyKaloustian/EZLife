// webpack.config.js

module.exports = {
    entry: './src/js/main.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, 
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.(png|woff|woff2|eot|otf|ttf|svg)$/, loader: 'url-loader?limit=100000' }
        ]
    },
    devServer: {
        port: 3000,
        historyApiFallback: true,
    }
};