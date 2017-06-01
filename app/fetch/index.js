/**
 * Created by Administrator on 2017/5/30.
 */
import 'whatwg-fetch';
import 'es6-promise';//做fetch的兼容
export function get(url){
    return fetch(url,{
        Accept:'application/json'
    })
}
function toUrlencoded(obj){//将对象转化成formData
    console.log(obj);
    let arr=[];
    for(let key in obj){
        arr.push(`${key}=${obj[key]}`)//[id=1,a=2]
    }
    return arr.join('&');
}
export function post(url,obj){
    console.log(toUrlencoded(obj));
    return fetch(url,{
        method:'POST',
        header:{
            'Content-Type':'application/x-www-form-urlencoded'
        },
        body:toUrlencoded(obj)
    })
}
