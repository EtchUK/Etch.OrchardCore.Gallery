const path = require('path');

module.exports = {
    entry: './Assets/js/admin/index.ts',
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
        filename: 'admin.js',
        path: path.resolve(__dirname, './wwwroot/Scripts'),
    },
};
