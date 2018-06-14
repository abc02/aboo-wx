import React from 'react'
import { Flex } from 'antd-mobile';
const Discount = (props) => (
    <span style={{padding: '3px 6px',fontSize: '12px', color: 'white', background: '#399af7', position: 'absolute', right: '0', top: '50%', marginTop: '-7px'}}>{props.discount}折</span>
)
const VipButton = (props) => (
    <Flex direction="column" align="start" style={{position: 'relative',padding: '10px 6px 3px 6px', border: '1px solid #ddd', borderRadius: '3px', color: 'gray'}}>
        <h4 style={{marginBottom: '6px', fontWeight: 'normal'}}>
            { props.discount ? 
            `${(props.month * 10) * (props.discount  /  10)}元` :
            `${(props.month * 10)}元` 
            } 
            </h4>
        <p>{props.month}个月</p>
        {props.discount ? <Discount discount={props.discount} /> : null }
    </Flex>
)

export default VipButton