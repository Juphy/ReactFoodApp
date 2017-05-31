/**
 * Created by Administrator on 2017/5/31.
 */
import {get} from '../index.js'
export function getInfo(id){
    return get('/api/detail/info/'+id);
}
export function getComment(id,page){
    return get('/api/detail/comment/'+id+'/'+page)
}