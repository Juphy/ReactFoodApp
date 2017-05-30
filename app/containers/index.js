/**
 * Created by Administrator on 2017/5/30.
 */
import React,{Component} from 'react';
import RouterMap from '../routes/index'
export default class App extends Component{
    constructor(){
        super();
        this.state={
            done:false
        }
    }

    render(){
        return (
            <div>
                {this.state.done?<RouterMap/>:<div>正在加载。。。</div>}
            </div>
        )
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                done:true
            })
        },500);
    }
}
