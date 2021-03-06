/**
 * Created by Administrator on 2017/5/31.
 */
import React, {Component} from 'react';
import './index.less'
export default class LoadMore extends Component {
    render() {
        return (
            <div className="has-more">
                {this.props.hasMore ? <div ref="more" onClick={()=>this.loadMore()}>加载更多</div> : <div>我是有底线的</div>}
            </div>
        )
    }
    componentDidMount(){//绑定滚动事件
        this.fn=()=>{
            clearTimeout(this.timer);
            this.timer=setTimeout(()=>{
                //先判断是否正在加载.
                if(this.props.isLoading){
                    return;
                }

                //判断按钮距离屏幕顶部的高度和可视窗口的高度
                let screen=window.screen.height;
                let top=this.refs.more.getBoundingClientRect().top;//获取当前元素的位置，距离上下左右的距离
                if(top<screen){//如果按钮进入可视窗口加载更多
                    this.props.loadMore();
                }
            },50)
        };
        window.addEventListener('scroll',this.fn)
    }
    componentWillUnmount(){//移除
        window.removeEventListener('scroll',this.fn)
    }
    loadMore() {//调用父级传递的加载更多的函数
        if (this.props.isLoading) {
            return;
        }
        this.props.loadMore();
    }
}