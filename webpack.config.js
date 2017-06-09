/**
 * Created by Administrator on 2017/5/30.
 */
let path=require('path');
let htmlWebpackPlugin=require('html-webpack-plugin');
let ExtractTextPlugin=require('extract-text-webpack-plugin');
let extract=new ExtractTextPlugin('build.css');
module.exports={
    entry:{
        index:'./app/index.js',
        vendors:['react','react-dom','redux','react-redux','react-router-dom']
    },
    output:{
        path:path.resolve('dist'),
        filename:'[name].js',
    },
    module:{
        rules:[
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.less$/,use:extract.extract(['css-loader',{
                loader:'postcss-loader',
                options:{
                    plugins:[
                        require('autoprefixer')//添加css前缀
                    ]
                }
            },'less-loader'])},
        ]
    },
    plugins:[
        extract,
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