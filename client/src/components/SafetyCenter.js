import React from 'react'
import history from './history';
import { NavBar, Icon, Button, Tabs, Card, List, WhiteSpace  } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;
const SafetyCenter = () => (
    <div>
        <NavBar
         icon={<Icon type="left"  size="lg" />}
    leftContent="返回"
    onLeftClick={_ => history.goBack()}
    style={{minHeight: '7vh'}}>安全守护</NavBar>
    
        <Button type="primary" inline className="bottom-center-absolute">添加围栏</Button>
    </div>
);
  
  
export default SafetyCenter