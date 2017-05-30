/**
 * Created by Administrator on 2017/5/30.
 */
import React,{Component} from 'react';
import ListItem from "./ListItem/index";
export default class ListComponent extends Component{
    render(){
        return (
            <div>
                {this.props.data.map((item,index)=>(
                    <ListItem key={index}/>
                ))}
            </div>
        )
    }
}