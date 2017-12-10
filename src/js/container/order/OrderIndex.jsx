import React from 'react';
import {Link} from 'react-router';

export default class OrderIndex extends React.Component{
    render(){
        return(
            <div id='OrderIndex'>
                <div className='OrderIndex_logo'>
                    <img src="../../../image/logo.jpg" alt=""/>
                </div>
                <div className='OrderBac'></div>
                <div className='Order_Nav'>
                    <div>
                        <Link to='/mianqian'>面签</Link>
                    </div>
                    <div>
                        
                    </div>
                    <div>
                        
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        )
    }
}