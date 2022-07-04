const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/js/main.js',
    output: {
      filename: 'js/[name].js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },

    module: {
        rules: [
            
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images',
                    },
                }]
            },
            {
                test: /\.njk$/,
                use: [
                    {
                        loader: 'simple-nunjucks-loader',
                        options: {
                            searchPaths: [
                                './src/partials',
                            ],
                            assetsPaths: [
                                'src/images',

                            ]
                        }
                    }
                ]
            },

        ]
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: './src/pages/index.njk',
        }),
        new HTMLWebpackPlugin({
            template: './src/pages/team.njk',
            filename: 'team/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }),
        new CopyPlugin({
            patterns: [
              {
                from: './src/images',
                to: './dist/images',
              },

            ],
        }),
    ],
    devServer: {
        hot: false,
        allowedHosts: "all",
    },
}
