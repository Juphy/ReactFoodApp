/**
 * Created by Administrator on 2017/5/30.
 */
//合并所有reducer到处去，让store使用
import {combineReducers} from 'redux'
import {userInfo} from './userInfo'
export default combineReducers({
    userInfo
})