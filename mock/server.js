/**
 * Created by Administrator on 2017/5/30.
 */
let express=require('express');
let app=express();
app.listen(3000);
let bodyParser=require('body-parser');
let ad=require('./home/ad');
app.use(bodyParser.urlencoded({extended:true}));
app.get('/api/ad',(req,res)=>{
    res.send(ad)
});
//fetch(url,{
// Accept:'application/json'
// }).then(res=>res.json()).then(data=>{
// console.log(data)
// })
let list=require('./home/list');
//获取列表需要传递城市
app.get('/api/list/:city/:page',(req,res)=>{
    res.send(list);
});
//商户详情
let info=require('./detail/info');
//通过Id来获取商户信息
app.get('/api/detail/info/:id',(req,res)=>{
/*  console.log(req.params.id);*/
    res.send(info)
});
//评价列表 id，page
let comment=require('./detail/comment');
app.get('/api/detail/comment/:id/:page',(req,res)=>{
/*  console.log(req.params.id);
    console.log(req.params.page);*/
    res.send(comment);
});
//
let orderList=require('./orderlist/orderList');
app.get('/api/orderlist/:username',(req,res)=>{
    res.send(orderList);
});
app.post('/api/comment',(req,res)=>{
    console.log(req.body);
    res.send({msg:'ok'})
});
