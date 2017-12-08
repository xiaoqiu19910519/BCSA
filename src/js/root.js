import React from 'react';
import ReactDom from 'react-dom';
import ReactRouterDom from 'react-router-dom';
import Header from './components/Header'
import { Icon, Grid } from 'antd-mobile';
 
import 'antd-mobile/dist/antd-mobile.css';
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
                <Icon type="left" size='md' color="red" />
            </div> 
        )
    }
}
ReactDom.render(<Root/>,document.getElementById('app'))
