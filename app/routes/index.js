/**
 * Created by Administrator on 2017/5/30.
 */
import React,{Component} from 'react';
import {
    HashRouter as Router,//容器
    Route//单条组件
}from 'react-router-dom'
import Home from '../containers/Home'
export default class RouterMap extends Component{
    render(){
        return (
            <div>
                <Router>
                    <div>
                        <Route path='/' component={Home}/>
                    </div>
                </Router>
            </div>
        )
    }
}