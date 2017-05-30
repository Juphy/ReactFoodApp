/**
 * Created by Administrator on 2017/5/30.
 */
let express=require('express');
let app=express();
app.listen(3000);
let ad=require('./home/ad');
app.get('/api/ad',(req,res)=>{
    res.send(ad)
});
//fetch(url,{
// Accept:'application/json'
// }).then(res=>res.json()).then(data=>{
// console.log(data)
// })