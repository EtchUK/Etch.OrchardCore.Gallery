const autoprefixer = require('autoprefixer');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');

module.exports = [
    {
        entry: {
            admin: path.join(process.cwd(), './Assets/Scripts/admin/index.ts'),
            gallery: path.join(
                process.cwd(),
                './Assets/Scripts/gallery/index.ts'
            ),
            styles: path.join(
                process.cwd(),
                './Assets/Styles/gallery/styles.scss'
            ),
            'styles.admin': path.join(
                process.cwd(),
                './Assets/Styles/admin/admin.scss'
            ),
        },
        output: {
            path: path.join(process.cwd(), 'wwwroot/js'),
            filename: '[name].js',
        },
        module: {
            rules: [
                {
                    test: /(\.ts(x?)$)/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: [
                                    [
                                        '@babel/preset-env',
                                        {
                                            corejs: {
                                                version: 3,
                                                proposals: true,
                                            },
                                            useBuiltIns: 'entry',
                                        },
                                    ],
                                ],
                            },
                        },
                        {
                            loader: 'ts-loader',
                            options: {
                                configFile: path.join(
                                    process.cwd(),
                                    './tsconfig.json'
                                ),
                            },
                        },
                    ],
                },
                {
                    test: /(\.js(x?)$)/,
                    exclude: /node_modules/,
                    use: ['babel-loader'],
                },
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                url: false,
                            },
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    plugins: [['autoprefixer']],
                                },
                            },
                        },
                        'sass-loader',
                    ],
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
            alias: {
                vue$: 'vue/dist/vue.esm.js',
            },
        },
        externals: {
            bootstrap: 'bootstrap',
            jquery: 'jQuery',
            vue: 'Vue',
        },
        plugins: [
            new ESLintPlugin({
                extensions: ['ts'],
            }),
            new RemoveEmptyScriptsPlugin(),
            new MiniCssExtractPlugin({
                filename: '../css/[name].css',
            }),
        ],
    },
];
