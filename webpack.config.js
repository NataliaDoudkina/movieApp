const path=require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
  mode: 'production',
    entry:{
      app:"./src/index.js"
    },
    output:{
        path:path.join(__dirname,'public'),
        filename:"bundle.js"
    },
    module:{
        rules:[
            { 
                test: /\.css?$/,
                use: [
                  { loader: "style-loader" },
                  { loader: "css-loader" },
                ]
              },
              {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
              {
                test: /\.scss$/,
                use: [
                  { loader: "style-loader" },
                  { loader: "css-loader" },
                  { loader: "sass-loader" }
                ]
              },           
               
            {
                test:/\.js$/,
                exclude: [/node_modules/],
                loader: 'babel-loader',
              

            }
        ]
    },
   
    plugins: [
      // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: 'Production',
      }),
    ],

    devtool:'cheap-module-source-map',
    devServer:{
        contentBase: path.join(__dirname,'public')
    }
}
