const path = require('path');

module.exports = {
    entry: {
        'admin': './Assets/js/admin/index.ts',
        'gallery': './Assets/js/gallery/index.ts'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './wwwroot/Scripts'),
    },
};
