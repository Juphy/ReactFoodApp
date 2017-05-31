/**
 * Created by Administrator on 2017/5/31.
 */
import React,{Component} from 'react';
import HeaderComponent from "../../components/HeaderComponent/index";
import Info from "./subpage/Info";
import Comment from "./subpage/Comment";
//通过路由渲染的组件的this.props会增加许多属性
export default class Detail extends Component{
    render(){
        console.log(this.props);
        return (
            <div>
                {/*头部*/}
                <HeaderComponent title="商户详情" history={this.props.history}/>
                {/*商户信息*/}
                <Info id={this.props.match.params.id}/>
                {/*购买和收藏*/}

                {/*品论*/}
                <Comment id={this.props.match.params.id}/>
            </div>
        )
    }
}