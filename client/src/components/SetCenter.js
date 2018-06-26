import React from 'react'
import { NavBar, Icon, Button, Switch, List, WhiteSpace  } from 'antd-mobile';
// import Icon60 from '../assets/Icon-60@3x.png'

const Item = List.Item;
// const Brief = Item.Brief;
const PersonalCenter = props => (
    <div>
        <NavBar
    rightContent={<Icon type="cross" size="lg" color="white" onClick={_ => props.history.goBack()}/>}
    style={{minHeight: '7vh'}}>个人资料</NavBar>
     <List>
    <Item
      arrow="horizontal">
     <WhiteSpace size="md" />
      修改密码
      <WhiteSpace size="md" />
    </Item>
    <Item
      arrow="horizontal"
      extra="0.00MB">
     <WhiteSpace size="md" />
      清除缓存
      <WhiteSpace size="md" />
    </Item>
    <Item
      arrow="horizontal">
     <WhiteSpace size="md" />
      关于我们
      <WhiteSpace size="md" />
    </Item>
    <Item
      extra={<Switch
      />}>
     <WhiteSpace size="md" />
    消息推送
      <WhiteSpace size="md" />
    </Item>
    </List>
    <WhiteSpace size="lg" />
    <Button style={{color: 'red'}}>退出登录</Button>
    </div>
);
  
export default PersonalCenter