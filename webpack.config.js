/**
 * Created by Administrator on 2017/5/30.
 */
let path=require('path');
let htmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    entry:'./app/index.js',
    output:{
        path:path.resolve('dist'),
        filename:'build.js'
    },
    module:{
        rules:[
            {test:/\.js$/,loader:'babel-loader',exclude:/node_modules/},
            {test:/\.less/,loader:'style-loader!css-loader!less-loader'},
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'./app/index.html'
        })
    ],
    devtool:'source-map',//错误是可以提醒源码错误，不会光显示bundle.js错误
    devServer:{
        proxy:{
            '/api':'http://localhost:3000'
        }
    }

};