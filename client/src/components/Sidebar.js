import React from 'react';
import { List, WhiteSpace } from 'antd-mobile';
import tx_background from '../assets/tx_background@2x.png'

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
        const txStyle = {
            height: '30vh',
            backgroundImage: `url(${tx_background})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            color: 'white'
        }
        return (<Item key={index}
        style={txStyle}
        >  <img style={style} src="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png" alt="头像"/> 
    <span style={{color: 'white'}}> {i}</span></Item>);
    }
    return (<div key={index}>
        <Item
        thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
        arrow="horizontal"
    >{i}</Item>
    <WhiteSpace size="md" />
    </div>);
    })}
</List>);

export default sidebar
