const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV == 'production';


const stylesHandler = MiniCssExtractPlugin.loader;



const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        static: './static',
        hot: true,
        compress: true,
        port: 8080,
        proxy: {
            '/home': 'http://localhost:3000',
            '/api': {
            target: 'http://localhost:3000',
            pathRewrite: { '^/api': '' },
          },
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './static/index.html',
        }),

        new MiniCssExtractPlugin(),

    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                use: [
                    {
                      loader: 'babel-loader',
                      options: {
                        presets: [['@babel/preset-env'], ['@babel/preset-react']],
                      },
                    },
                  ],
                exclude: ['/node_modules/'],
            },
            {
                test: /\.css$/i,
                use: [stylesHandler,'css-loader'],
                exclude: ['/node_modules/'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        
    } else {
        config.mode = 'development';
    }
    return config;
};
