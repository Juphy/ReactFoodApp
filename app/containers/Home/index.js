/**
 * Created by Administrator on 2017/5/30.
 */
import React,{Component} from 'react';
import HomeHeader from '../../components/HomeHeader/index'
import Slider from '../../components/Slider/index'
import Ad from './subpage/Ad.js'
import List from './subpage/List'
import {connect} from 'react-redux'
class Home extends Component{
    render(){
        return (
            <div>
                <HomeHeader cityName={this.props.userInfo.cityName} history={this.props.history}/>
                <Slider/>
                <Ad/>
                <List cityName={this.props.userInfo.cityName}/>
            </div>
        )
    }
}
//
export default connect(
    state=>{
        return{userInfo:state.userInfo}//取出redux state中userInfo的数据，赋予给变量userInfo
    }
)(Home)
