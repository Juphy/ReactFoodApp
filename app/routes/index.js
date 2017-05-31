/**
 * Created by Administrator on 2017/5/30.
 */
import React,{Component} from 'react';
import {
    HashRouter as Router,//route容器
    Route,//单条组件
    Switch//只匹配一次
} from 'react-router-dom'
import Home from '../containers/Home';
import Detail from '../containers/Detail/index';
import Login from '../containers/Login'
import User from '../containers/User'
export default class RouterMap extends Component{
    render(){
        return (
            <div>
                <Router>
                    <Switch>{/*只有当路径为/的时候才匹配路由*/}
                            <Route exact path='/' component={Home}/>
                            <Route path="/detail/:id" component={Detail}/>
                        {/*点击先跳转到登录页，登陆后在跳转到之前的页面，在login之后可能需要上一个路径,可有可没有*/}
                            <Route path="/login/:route?" component={Login}> </Route>
                            <Route path="/user" component={User}> </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}