/**
 * Created by Administrator on 2017/5/30.
 */
import * as Types from '../actionTypes/userInfo'
let initState={};
export function userInfo(state=initState,action){
    switch(action.type){
        //
        case Types.UPDATE_CITY:
            return action.data;
        default:
            return state;
    }
}