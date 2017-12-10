import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import Index from './container/index.jsx';
import Login from './container/login/login.jsx';
import MineIndex from './container/mine/MineIndex.jsx';
import OrderIndex from './container/order/OrderIndex.jsx';
import Mianqian from './container/mianqian.jsx'
import { Icon, Grid } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import '../css/style.scss';
(function (doc, win) {
	var docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function () {
			var clientWidth = docEl.clientWidth;
			if (!clientWidth) return;
			if(clientWidth>=640){
				docEl.style.fontSize = '100px';
			}else{
				docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
			}
		};

	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
export default class Root extends React.Component {

    render() {
        return ( 
            <div id='Root'>
                <Router history={hashHistory}>
					<Route path='/' component = {Login}></Route>	
					<Route path='/index' component = {Index}>
						<Route path='/mine' component = {MineIndex}></Route>
						<Route path='/order' component = {OrderIndex}></Route>
					</Route>
					<Route exact path='/mianqian' component = {Mianqian}></Route>
				</Router>
            </div> 
        )
    }
}
ReactDom.render(<Root/>,document.getElementById('app'))
