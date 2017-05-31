/**
 * Created by Administrator on 2017/5/31.
 */
import React,{Component} from 'react';
import HeaderComponent from "../../components/HeaderComponent/index";
import {connect} from 'react-redux';
import * as Actions from '../../actions/userInfo'
import {bindActionCreators} from 'redux'
import LoginComponent from "../../components/LoginComponent/index";
class Login extends Component{
    constructor(){
        super();
        this.state={
            login:false//默认没登陆过，默认不显示登录组件
        }
    }
    render(){
        return (
            <div>
                <HeaderComponent title="登录" history={this.props.history}/>
                {/*如果登录过显示登录组件，否则不显示直接跳转用户页面*/}
                {this.state.login?<LoginComponent login={this.login.bind(this)}/>:<div> </div>}
            </div>
        )
    }
    //需要一个方法用于登录，将用户名存入redux里
    login(username){
        let info=this.props.userInfo;
        info.username=username;
        //更新redux中的状态
        this.props.userActions.update(info);
        //登录成功跳转到用户页面
        console.log(this.props);
        if(this.props.match.params.route){
            console.log(this.props.match.params.route);
            //提交到login的路径肯定是通过encode转化后的跳转是需要解码的
            this.props.history.push(decodeURIComponent(this.props.match.params.route))
        }else{
            //如果没有指定调回哪一个页面，默认回到
            this.props.history.push('/user')
        }
    }
    componentDidMount(){
        this.checkLogin();
    }
    checkLogin(){//检查是否登录，在redux中state.usserInfo
        if(this.props.userInfo.username){
            this.props.history.push('/user')
        }
        this.setState({
            login:true//显示登录组件
        })
    }
}
export default connect(
    state=>{
        return {userInfo:state.userInfo}
    },
    dispatch=>{
        return {userActions:bindActionCreators(Actions,dispatch)}
    }
)(Login)