/**
 * Created by Administrator on 2017/6/1.
 */
import * as Types from '../actionTypes/store'
let initState=[];
export function store(state=initState,action){
    switch (action.type){
        case Types.ADD_STORE:
            return [...state,action.data];
        case Types.REMOVE_STORE:
            /*通过传递的ID将数组中的某一项移除掉*/
            return state.filter(item=>action.data!==item);
        default:
            return state;
    }

}