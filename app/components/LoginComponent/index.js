/**
 * Created by Administrator on 2017/5/31.
 */
import React,{Component} from 'react';
import './index.less'
export default class LoginComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            val:''
        }
    }
    render(){
        return (
            <div className="login-component">
                {/*ref 事件*/}
                <input type="text" value={this.state.val} onChange={this.changeValue.bind(this)} placeholder="请输入用户名"/>
                <button className="back" onClick={this.login.bind(this)}>登录</button>
            </div>
        )
    }
    changeValue(e){
        this.setState({
            val:e.target.value
        });
    }
    login(){

        this.props.login(this.state.val)
    }
}