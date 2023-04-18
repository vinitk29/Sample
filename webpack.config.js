const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {

    resolve: {
        extensions: ['.tsx', '.js', '.json']
    },

    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],

    module: {
        rules: [
            {
                test: /.js|tsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader","css-loader"],
            },
            {
                test: /\.jpg$/,
                use: ["style-loader","css-loader"],
            },
            {
                test: /\.jpg|svg|jpg|gif$/,
                use: ["file-loader"],
            }
        ]
    }

}