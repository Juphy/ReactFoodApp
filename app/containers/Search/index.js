/**
 * Created by Administrator on 2017/6/1.
 */
import React,{Component} from 'react';
import SearchHeader from "../../components/SearchHeader/index";
//可以从轮播图点击警来/search/
// /search/:kind/:keyword
export default class Search extends Component{
    render(){
        return (
            <div>
                <SearchHeader
                    value={this.props.match.params.keyword||''}
                    history={this.props.history}
                    fn={this.toSearch.bind(this)}
                />

            </div>
        )
    }
    toSearch(value){
        this.props.history.push('/search/all/'+value)
    }
}