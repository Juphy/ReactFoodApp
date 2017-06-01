/**
 * Created by Administrator on 2017/6/1.
 */
import React,{Component} from 'react';
import {getOrderList,postComment} from '../../../fetch/orderList'
import OrderListComponent from "../../../components/OrderListComponent/index";
export default class OrderList extends Component{
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    render(){
        return (
            <div>
                {this.state.data?<OrderListComponent data={this.state.data} commitComment={this.commitComment.bind(this)}/>:<div>正在加载。。。</div>}
            </div>
        )
    }
    //提交评价到后台
    commitComment(id,comment,callback){//内容 用户id  callback更改评价状态
        console.log(comment);
        console.log(id);
        postComment({id,comment}).then(res=>res.json()).then(data=>{
            callback();
        })
    }
    componentDidMount(){
        getOrderList(this.props.username).then(res=>res.json()).then(data=>{
            console.log(data);
            this.setState({
                data
            })
        })
    }
}