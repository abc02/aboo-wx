import React from 'react'
import history from './history';
import { NavBar, Icon, List, WhiteSpace  } from 'antd-mobile';
import Icon60 from '../assets/Icon-60@3x.png'

const Item = List.Item;
const Img = (<div>
    <img src={Icon60} style={{width: '50px', height: '50px'}} alt="Icon60" />
    </div>
)
const PersonalCenter = () => (
    <div>
        <NavBar
    rightContent={<Icon type="cross" size="lg" color="white" onClick={_ => history.goBack()} />}
    style={{minHeight: '7vh'}}>个人资料</NavBar>
     <List>
    <Item
      arrow="horizontal"
      extra={Img}>
     <WhiteSpace size="md" />
      头像
      <WhiteSpace size="md" />
    </Item>
    </List>
    <WhiteSpace size="lg" />
    <List>
    <Item
      arrow="horizontal"
      extra="阿布跑跑">
     <WhiteSpace size="md" />
      昵称
      <WhiteSpace size="md" />
    </Item>
    </List>
    </div>
);
  
export default PersonalCenter