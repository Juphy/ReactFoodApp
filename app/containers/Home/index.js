/**
 * Created by Administrator on 2017/5/30.
 */
import React,{Component} from 'react';
import HomeHeader from '../../components/HomeHeader/index'
import Slider from '../../components/Slider/index'
import  Ad from './subpage/Ad.js'
export default class Home extends Component{
    render(){
        return (
            <div>
                <HomeHeader cityName="北京"/>
                <Slider/>
                <Ad/>
            </div>
        )
    }
}