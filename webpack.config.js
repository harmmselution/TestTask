const path = require("path");
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

module.exports = {
    context: path.join(__dirname, 'src'),
    mode: 'development',
    entry: './js/form.js',
    output: {
        filename: `./js/${filename('js')}`,
        path: path.join(__dirname, 'app'),
        clean:true,
        publicPath: '',
    },
    resolve: {
        alias: {
            images: path.resolve(__dirname,'src/img')
        }
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'src/test.html'),
        },
        hot:true,
        compress: true,
        port: 9000,
      },
    plugins: [
    new HTMLWebpackPlugin({
        template: path.resolve(__dirname, 'src/test.html'),
        filename: 'test.html',
        minify: {
            collapseWhitespace: isProd
        }
    }),
    new MiniCssExtractPlugin({
        filename: `./scss/${filename('css')}`
    })
    ],
    module: {
        rules: [
           
            
            {
                test: /\.css$/i,
                use: [
                 {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        hmr: isDev
                    },
                 },
                 'css-loader'
                ],
            },
            {
                test: /\.s[ac]ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader','sass-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(?:|woff2|eot|svg|ttf|woff)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: `src/fonts/${filename('[ext]')}`
                    }
                }],
            }
        ]
        
    }
};
