import React from 'react';
import {Link} from 'react-router';
import { Icon, Grid } from 'antd-mobile';
import { List, InputItem, WhiteSpace } from 'antd-mobile';
import { Button } from 'antd-mobile';
import { createForm } from 'rc-form';
import Header from '../../components/Header.jsx'
class Login extends React.Component{
    render(){
        const { getFieldProps } = this.props.form;
        return(
            <div id='Login'>
                <Header title='账户登录'></Header>
                <div style={{marginTop:'3rem'}}>
                    <div className='Login_List'>
                        <InputItem
                            {...getFieldProps('phone')}
                            type="text"
                            placeholder="请输入账号"
                        >账号</InputItem>
                        <Icon className='Login_img' type='down' />
                    </div>
                    <div className='Login_List'>
                        <InputItem
                            {...getFieldProps('password')}
                            type="password"
                            placeholder="请输入密码"
                        >密码</InputItem>  
                        <img className='Login_img' src='../../../image/eyes.png' />
                    </div>
                    <Link to='/mine'>
                        <div className='Login_btn'>登录</div> 
                    </Link>  
                </div>
                                    
            </div>
        )
    }
} 
export default Login = createForm()(Login);