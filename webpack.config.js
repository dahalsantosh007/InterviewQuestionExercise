const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
      },
    module:{
        rules:[
            {
                test:/\.(ts|js)x?$/,
                exclude:/node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use:{
                    loader:'html-loader'
                }
            },
            {
                test:/\.css$/,
                use:[
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/,
                use: [
                    'file-loader',
                    {
                      loader: 'image-webpack-loader',
                      options: {
                        bypassOnDebug: true, // webpack@1.x
                        disable: true, // webpack@2.x and newer
                      },
                    },
                  ],
              }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename: './index.html'
        })
    ]
}