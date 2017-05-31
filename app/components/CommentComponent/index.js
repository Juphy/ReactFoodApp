/**
 * Created by Administrator on 2017/5/31.
 */
import React,{Component} from 'react';
import CommentItem from "./CommmentItem/index";
export default class CommentComponent extends Component{
    render(){
        return (
            <div>
                {this.props.data.map((item,index)=>(
                    <CommentItem data={item} key={index}/>
                ))}
            </div>
        )
    }
}