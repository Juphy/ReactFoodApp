/**
 * Created by Administrator on 2017/5/31.
 */
import React, {Component} from 'react';
import './index.less'


export default class HeaderComponent extends Component {
    render() {
        return (
            <div className="back header-component">
                <span>
                    <i className="iconfont icon-fanhui" onClick={this.back.bind(this)}> </i>
                    {this.props.title}
                    </span>
            </div>
        )
    }
    back(){
        if(this.props.back){
            this.props.history.push('/');//手动跳转到指定的路径
        }else{
            this.props.history.go(-1);//返回上一页的方法，从父组件传递过来的
        }
    }
}