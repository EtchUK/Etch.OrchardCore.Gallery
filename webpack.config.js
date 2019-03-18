const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: {
        'admin': './Assets/js/admin/index.ts',
        'gallery': './Assets/js/gallery/index.ts',
        'styles': './Assets/css/styles.scss'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader?-url',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [autoprefixer('last 1 version', 'ie 10')]
                            }
                        }
                    },
                    'sass-loader'
                ]
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './wwwroot/Scripts'),
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '../Styles/styles.css'
        })
    ]
};
