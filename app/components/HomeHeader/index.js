/**
 * Created by Administrator on 2017/5/30.
 */
import React,{Component} from 'react';
import './index.less'
import {Link} from 'react-router-dom'
export default class HomeHeader extends Component{
    render(){
        return (
            <div className="home-header back">
                <div className="city">
                    {this.props.cityName}
                    <i className="iconfont icon-xiangxia2"> </i>
                </div>
                <div className="search">
                    <i className="iconfont icon-sousuo-xianxing"> </i>
                    <input type="text"/>
                </div>
                <Link  className="profile" to="/login">
                    <div>
                        <i className="iconfont icon-yonghufill"> </i>
                    </div>
                </Link>
            </div>

        )
    }
}