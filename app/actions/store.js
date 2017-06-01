/**
 * Created by Administrator on 2017/6/1.
 */
import * as Types from '../actionTypes/store'

//actionCreator
export function add(id){
    return {
        type:Types.ADD_STORE,
        data:id
    }
}
export function remove(id){
    return {
        type:Types.REMOVE_STORE,
        data:id
    }
}
