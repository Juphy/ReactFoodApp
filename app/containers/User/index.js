/**
 * Created by Administrator on 2017/5/31.
 */
import React,{Component} from 'react';
import HeaderComponent from "../../components/HeaderComponent/index";
import {connect} from 'react-redux'
import UserInfo from "../../components/UserInfo/index";
class User extends Component{
    render(){
        return (
            <div>
                {/*返回登录页，检查是否登录，会再次跳回*/}
                <HeaderComponent title="用户信息" history={this.props.history} back="/"/>
                <UserInfo userInfo={this.props.userInfo}/>
            </div>
        )
    }
}
export default connect(
    state=>{
        return {userInfo:state.userInfo}
    }
)(User)