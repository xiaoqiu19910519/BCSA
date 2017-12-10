import React from 'react';
import ReactDom from 'react-dom';
import {Link,hashHistory} from 'react-router';
import {browserHistory } from 'react-router';
import MineIndex from './mine/MineIndex.jsx';
import { Icon, Grid } from 'antd-mobile';
import OrderIndex from './order/OrderIndex.jsx';
export default class Index extends React.Component {
    constructor(){
        super();
        this.state = {
            footerIndex:'1',
        }
    }
    componentWillMount(){
        if(location.href.indexOf('mine') != -1){
            this.setState({
                footerIndex:2,
            }); 
        }else{
            this.setState({
                footerIndex:1,          
            }); 
        }
    }
    changeFooter(index){  
        this.setState({
            footerIndex:index,
        });    
    }
    render(){
        return(
            <div id='Index'>
                {this.props.children}
                <div className='Index_footer'> 
                    <Link to='/order'>  
                        <dl style={{color:this.state.footerIndex == 1 ? '#508CEE' : '#333333'}} onClick={this.changeFooter.bind(this,1)}>
                            <dt>
                                {this.state.footerIndex == 1 
                                    ?<img src="../../image/home1.png" alt=""/>
                                    :<img src="../../image/home2.png" alt=""/>
                                }
                            </dt>
                            <dd>订单</dd>  
                        </dl>
                    </Link>
                    <Link to='/mine'>
                        <dl style={{color:this.state.footerIndex == 2 ? '#508CEE' : '#333333'}} onClick={this.changeFooter.bind(this,2)}>
                            <dt>
                                {this.state.footerIndex == 2 
                                    ?<img src="../../image/mine1.png" alt=""/>
                                    :<img src="../../image/mine2.png" alt=""/>
                                }
                            </dt>
                            <dd>我的</dd>  
                        </dl>
                    </Link>                   
                </div>   
            </div> 
           
        )
    }
}
