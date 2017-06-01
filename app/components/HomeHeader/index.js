/**
 * Created by Administrator on 2017/5/30.
 */
import React,{Component} from 'react';
import './index.less'
import {Link} from 'react-router-dom'
import SearchInput from "../SearchInput/index";
export default class HomeHeader extends Component{
    render(){
        return (
            <div className="home-header back">
                <Link to="city">
                    <div  className="city">
                        {this.props.cityName}
                        <i className="iconfont icon-xiangxia2"> </i>
                    </div>
                </Link>
                <div className="search">
                    <i className="iconfont icon-sousuo-xianxing"> </i>
                    {/*此搜索框需要一个函数*/}
                    <SearchInput value="" fn={this.toSearch.bind(this)}/>
                </div>
                <Link  className="profile" to="/login">
                    <div>
                        <i className="iconfont icon-yonghufill"> </i>
                    </div>
                </Link>
            </div>

        )
    }
    toSearch(value){
        this.props.history.push('/search/all/'+value)
    }
}