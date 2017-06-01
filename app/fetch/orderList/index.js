/**
 * Created by Administrator on 2017/6/1.
 */
import {get,post} from '../index'
export  function getOrderList(username){
    return get('/api/orderlist/'+username)
}
//修改评价列表 /api/comment  {id,comment}
export function postComment(obj) {
    return post('/api/comment',obj)
}