/**
 * Created by Administrator on 2017/5/30.
 */
//合并所有reducer到处去，让store使用
import {combineReducers} from 'redux'
import {userInfo} from './userInfo'
export default combineReducers({//合并reducer 会将以前的state增加一个userInfo属性
    userInfo
})