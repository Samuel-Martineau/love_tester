var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
    filename: 'bundle.css'
});

module.exports = {
    entry: './src/entry.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        // publicPath: '/dist'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: [
                        'css-loader',
                        'sass-loader'
                    ]
                })
            },
            {
                test: /\.html$/,
                use: [
                    'html-loader',
                ]
            },
            {
                test: /\.(jpg|png)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img/',
                            publicPath: 'img/'
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    plugins: [
        extractPlugin,
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/html/index.html'
        })
    ]
}