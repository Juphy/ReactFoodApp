/**
 * Created by Administrator on 2017/5/30.
 */
import React, {Component} from 'react';
import {getList} from '../../../fetch/home'
import ListComponent from "../../../components/ListComponent/index";

export default class List extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            hasMore: true
        }
    }

    componentDidMount() {
        this.processData(getList(this.props.cityName, 0));
    }

    //处理工程后的逻辑
    processData(result) {
        result.then(res => res.json()).then(({hasMore, data}) => {
            this.setState({
                hasMore,
                data
            })
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.data.length ?
                        <ListComponent data={this.state.data}/>
                        : <div>正在加载。。。</div>
                }
            </div>
        )
    }
}