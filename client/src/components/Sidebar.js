import React from 'react';
import { List } from 'antd-mobile';

const Item = List.Item;

// fix in codepen
const sidebar = (<List style={{height: '100%'}}>
    {[ '阿布跑跑', '我的鞋垫', '宝宝论坛', '阿布公益', '我要分享', '系统设置'].map((i, index) => {
    if (index === 0) {
        const style = {
            height: '50px',
            width: '50px',
            marginRight: '20px',
            borderRadius: '50%'
        }
        return (<Item key={index}
        style={{height: '30vh'}}
        >  <img style={style} src="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png" alt="头像"/> 
    <span> {i}</span></Item>);
    }
    return (<Item key={index}
        thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
        arrow="horizontal"
    >{i}</Item>);
    })}
</List>);

export default sidebar
