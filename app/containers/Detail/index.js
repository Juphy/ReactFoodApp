/**
 * Created by Administrator on 2017/5/31.
 */
import React,{Component} from 'react';
import HeaderComponent from "../../components/HeaderComponent/index";
import Info from "./subpage/Info";
import Comment from "./subpage/Comment";
import Buy from "../../components/Buy/index";
import {connect} from 'react-redux'
import * as Actions from '../../actions/store'
import {bindActionCreators} from 'redux'
//通过路由渲染的组件的this.props会增加许多属性
class Detail extends Component{
    constructor(){
        super();
        this.state={
            isStore:false
        }
    }
    render(){
        console.log(this.props);
        return (
            <div>
                {/*头部*/}
                <HeaderComponent title="商户详情" history={this.props.history}/>
                {/*商户信息*/}
                <Info id={this.props.match.params.id}/>
                {/*购买和收藏*/}
                <Buy buy={this.buy.bind(this)} store={this.store.bind(this)} isStore={this.state.isStore}/>
                {/*品论*/}
                <Comment id={this.props.match.params.id}/>
            </div>
        )
    }
    componentDidMount(){
        //先从redux中获取所有收藏列表[]
        //console.log(this.props.store);
        //1、id
        let id=this.props.match.params.id;
        let flag=this.props.store.some(item=>item===id);
        if(flag){
            this.setState({
                isStore:flag
            })
        }
    }
    checkLogin(){
        //登陆过就返回true
        if(this.props.userInfo.username){
            return true
        }
        return false
    }
    buy(){//购买
        let flag=this.checkLogin();
        if(flag){
            this.props.history.push('/user')
        }else{
            //如果登录成功后调回当前页
            this.props.history.push('/login/'+(encodeURIComponent('/detail/'+this.props.match.params.id)))
        }
    }
    store(){//收藏
        //验证是否登录
        console.log(this.props);
        console.log(this.props.storeActions);
        let flag=this.checkLogin();
        if(!flag){//如果没登录
            this.props.history.push('/login/'+(encodeURIComponent('/detail/'+this.props.match.params.id)))
        }
        let id=this.props.match.params.id;
        if(this.state.isStore){
            //移除掉
            this.props.storeActions.remove(id)
        }else{
            //添加
            this.props.storeActions.add(id)
        }

        this.setState({
            isStore:!this.state.isStore
        });
    }
}
export default connect(
    state=>{
        return{
            userInfo:state.userInfo,
            store:state.store//这里存放的是收藏的数组
        }
    },
    dispatch=>{
        console.log(dispatch);
        return{
            storeActions:bindActionCreators(Actions,dispatch)
        }
    }
)(Detail)