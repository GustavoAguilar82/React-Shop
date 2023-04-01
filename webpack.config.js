const path = require("path");  //donde esta ubicado el proyecto, una compu o un servidor
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports={
    entry: './src/index.js',   //punto de entrada
    output: {    //lugar al que saldran los archivos
        path: path.resolve(__dirname, 'dist'),  //en nuestro path crea la carpeta dist, de distribution
        filename: 'React-Shop/bundle.js',  //nombre del archivo js resultante
        publicPath: '/React-Shop/',
        clean: true
    },
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx'],  //extenciones a tomar en cuenta
        alias: {  //es un objeto, de donde se encuentra esta carpeta y va a buscar a src/carpeta indicada //son atajos
            '@components' : path.resolve(__dirname, 'src/components/'),   
            '@containers' : path.resolve(__dirname, 'src/containers/'),
            '@pages' : path.resolve(__dirname, 'src/pages/'),
            '@styles' : path.resolve(__dirname, 'src/styles/'),
            '@icons' : path.resolve(__dirname, 'src/assets/icons/'),
            '@logos' : path.resolve(__dirname, 'src/assets/logos/'),
        }
    },
    module: {  //para cada tipo de archivo
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    "style-loader", "css-loader","sass-loader",
                ],
            },
            {
                test: /\.(png|jp(e*)g|svg|jpeg|webp|gif)$/,
                type: 'asset/resource',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
    ],
    devServer: {
        static: path.join(__dirname, "dist"),
        historyApiFallback: true,
        compress: true,
        port: 3001,
        open: true,
      },
}