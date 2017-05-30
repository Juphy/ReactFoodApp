/**
 * Created by Administrator on 2017/5/30.
 */
import {get} from '../index.js'
export function getAd(){
    return get('/api/ad');
}
export function getList(city,page){//获取列表数据
    return get('/api/list/'+city+'/'+page)
}