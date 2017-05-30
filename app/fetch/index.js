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
