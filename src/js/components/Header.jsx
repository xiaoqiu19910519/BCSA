import React from 'react';
import { Icon, Grid } from 'antd-mobile';
export default class Header extends React.Component{
    render(){
        return(
            <div id='Header'>
                 {this.props.title}
            </div>
        )
    }
} 