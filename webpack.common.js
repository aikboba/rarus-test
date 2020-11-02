const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const CopyPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
    },
    resolve: {
        extensions: [ '.js', '.vue' ],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@app': path.resolve(__dirname, 'src/vue-app'),
            Fonts: path.resolve(__dirname, 'src/fonts'),
            Images: path.resolve(__dirname, 'src/img'),
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                include: path.resolve(__dirname, 'src/vue-app')
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.resolve(__dirname, 'src')
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: "file-loader",
                options: {
                    outputPath: 'fonts/'
                }
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                loader: "file-loader",
                options: {
                    outputPath: 'img/'
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                include: path.resolve(__dirname, 'src/includes')
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new CopyPlugin({
            patterns: [
                { from: path.resolve(__dirname, 'src/data'), to: 'data/' },
            ],
        }),
        new ESLintPlugin()
    ],
    devServer: {
        stats: 'errors-only'
    },
};