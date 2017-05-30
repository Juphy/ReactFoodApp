/**
 * Created by Administrator on 2017/5/30.
 */
import React,{Component} from 'react';
import RouterMap from '../routes/index'
import {connect} from 'react-redux'
//绑定actionCreator组成的对象
import {bindActionCreators} from 'redux'
import * as Actions from '../actions/userInfo'//获取所有actionCreator组成的对象
import {getStorage} from '../local'
class App extends Component{
    constructor(){
        super();
        this.state={
            done:false
        }
    }

    render(){
        return (
            <div>
                {this.state.done?<RouterMap/>:<div>正在加载。。。</div>}
            </div>
        )
    }
    componentDidMount(){
        //现在本地查找是否存储过localStorage名字叫cityName
        //1、没有就默认给一个
        //2、将当前的城市存放在redux

        let cityName=getStorage('cityName');
        if(cityName==null){
            cityName='杭州';
        }
        //当页面已加载就存储一个城市
        this.props.userActions.update({
           cityName
        });
        setTimeout(()=>{
            this.setState({
                done:true
            })
        },500);
        /*console.log(this.props.userActions.update({
            cityName:'shanghai'
        }))*/


    }
}
export default connect(
    state=>{//mapStateToProps
        return{}
    },
    dispatch=>{//mapDispatchToProps
        return{
            userActions:bindActionCreators(Actions,dispatch)
        }
    }
)(App)//将状态和动作以属性的方式传递给了App