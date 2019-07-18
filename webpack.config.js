const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');

module.exports = {
    entry: {
        admin: './Assets/js/admin/index.ts',
        gallery: './Assets/js/gallery/index.ts',
        styles: './Assets/css/gallery/styles.scss',
        'styles.admin': './Assets/css/admin/admin.scss',
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
                            plugins: function() {
                                return [
                                    autoprefixer('last 1 version', 'ie 10'),
                                ];
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
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './wwwroot/Scripts'),
    },
    plugins: [
        new FixStyleOnlyEntriesPlugin(),
        new MiniCssExtractPlugin({
            filename: '../Styles/[name].css',
        }),
    ],
};
