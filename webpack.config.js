const path=require("path");
//entry:"../src/index.js",
module.exports={
  mode: 'production',
       entry: path.resolve(__dirname, "src") +"./src/index.js",
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
   


    devtool:'cheap-module-source-map',
    devServer:{
        contentBase: path.join(__dirname,'public')
    }
}
