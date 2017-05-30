/**
 * Created by Administrator on 2017/5/30.
 */
import React from 'react'
import ReactDOM from 'react-dom';
import App from './containers/index.js'
import './assets/index.less'
import {Provider} from 'react-redux'
import {configureStore} from './store'
//可以在configureStore中传入初始状态
let store=configureStore();//生成store
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('#root')
);