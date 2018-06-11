import React from 'react';
import { List, WhiteSpace } from 'antd-mobile';
import tx_background from '../assets/tx_background@2x.png'
import apps from '../assets/apps-1.png'
import icon_community from '../assets/icon_community@3x.png'
import icon_like_main from '../assets/icon_like_main@3x.png'
import share from '../assets/share-1.png'
import settings from '../assets/settings.png'
const Item = List.Item;

// fix in codepen
const sidebar = (<List style={{height: '100%'}}>
    {[ { text: '阿布跑跑'}, { text: '我的鞋垫', icon: apps },
    {text: '宝宝论坛', icon: icon_community },
    {text: '阿布公益', icon: icon_like_main},
    {text: '我要分享', icon: share },
    {text: '系统设置', icon: settings}].map((i, index) => {
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
    <span style={{color: 'white'}}> {i.text}</span></Item>);
    }
    return (<div key={index}>
        <Item
        thumb={i.icon}
        arrow="horizontal"
    >{i.text}</Item>
    <WhiteSpace size="md" />
    </div>);
    })}
</List>);

export default sidebar
