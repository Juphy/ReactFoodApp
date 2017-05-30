/**
 * Created by Administrator on 2017/5/30.
 */
import * as Types from '../actionTypes/userInfo'
//actionCreator
export function update(data){//修改的动作
    return{
        type:Types.UPDATE_CITY,
        data
    }
}