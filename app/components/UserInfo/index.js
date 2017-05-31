/**
 * Created by Administrator on 2017/5/31.
 */
import React,{Component} from 'react';
import './index.less'
export default class UserInfo extends Component{
    render(){
        console.log(this.props.userInfo);
        return (
            <div className="user-info">
                <span><i>用户名：</i>{this.props.userInfo.username}</span>

                <span><i>城市：</i>{this.props.userInfo.cityName}</span>
            </div>
        )
    }
    //检查是否登录。如果没等就先登录，跳转到登录页
}