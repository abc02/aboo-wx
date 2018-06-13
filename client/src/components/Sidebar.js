import React from 'react';
import { Link } from 'react-router-dom'
import { ActionSheet, List, WhiteSpace } from 'antd-mobile';
import tx_background from '../assets/tx_background@2x.png'
import apps from '../assets/apps-1.png'
import icon_community from '../assets/icon_community@3x.png'
import icon_like_main from '../assets/icon_like_main@3x.png'
import share from '../assets/share-1.png'
import settings from '../assets/settings.png'
import Icon60 from '../assets/Icon-60@3x.png'
const Item = List.Item;

let showActionSheet = () => {
    const BUTTONS = ['朋友圈', '微信好友', 'QQ', '取消'];
    ActionSheet.showActionSheetWithOptions({
      options: BUTTONS,
      cancelButtonIndex: BUTTONS.length - 1,
    //   destructiveButtonIndex: BUTTONS.length - 2,
      title: '推荐给好友',
      message: '请选择，并推荐给好友。',
      maskClosable: true,
    //   'data-seed': 'logId',
    //   wrapProps,
    },
    // (buttonIndex) => {
    //   this.setState({ clicked: BUTTONS[buttonIndex] });
    // }
);
  }

const data = [ 
    { text: '阿布跑跑', route: 'PersonalCenter', }, 
    { text: '我的鞋垫', route: 'FixingsCenter', icon: apps },
    { text: '宝宝论坛', route: 'BBSCenter', icon: icon_community },
    { text: '阿布公益', route: 'PublicBenefit', icon: icon_like_main },
    { text: '我要分享', route: 'ShareCenter', icon: share },
    { text: '系统设置', route: 'SetCenter', icon: settings }]
// fix in codepen
const sidebar = (<List style={{height: '100%'}}>
    {data.map((i, index) => {
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
        return (<Link to={i.route} key={index}>
        <Item style={txStyle}
        >  <img style={style} src={Icon60} alt="头像"/> 
    <span style={{color: 'white'}}> {i.text}</span></Item>
    </Link>);
    }
    if (i.route === 'ShareCenter') {
        return (<div key={index}><Item
            thumb={i.icon}
            arrow="horizontal"
            onClick={showActionSheet}
        >{i.text}</Item>
        <WhiteSpace size="md" />
        </div>)
    }
    return (<Link to={i.route} key={index}>
        <Item
        thumb={i.icon}
        arrow="horizontal"
    >{i.text}</Item>
    <WhiteSpace size="md" />
    </Link>);
    })}
</List>);

export default sidebar
