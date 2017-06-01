/**
 * Created by Administrator on 2017/6/1.
 */
import React,{Component} from 'react';
import HeaderComponent from "../../components/HeaderComponent/index";
import {connect} from 'react-redux'
import CurrentCity from "../../components/CurrentCity/index";
import * as Actions from '../../actions/userInfo'
import {bindActionCreators} from 'redux'
import ChooseCity from "../../components/ChooseCity/index";
class City extends Component{
    render(){
        return (
            <div>
                {/*头*/}
                <HeaderComponent title="选择城市" history={this.props.history}/>
                {/*当前城市*/}
                <CurrentCity cityName={this.props.userInfo.cityName}/>
                <ChooseCity changeCity={this.changeCity.bind(this)}/>
            </div>
        )
    }
    changeCity(city){//代表当前选择的城市
        let oldInfo=this.props.userInfo;//取出原有数据
        oldInfo.cityName=city;//更改成最新的数据，将最新的数据派发成动作
        this.props.userActions.update(oldInfo);
        this.props.history.push('/');//更改成功后跳转到首页
    }

}
export default connect(
    state=>{
        return{userInfo:state.userInfo}
    },
    dispatch=>{
        return{userActions:bindActionCreators(Actions,dispatch)}
    }
)(City)