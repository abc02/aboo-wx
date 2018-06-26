import React from 'react'
import { NavBar, Icon, Button  } from 'antd-mobile';

// const Item = List.Item;
// const Brief = Item.Brief;
const SafetyCenter = props => (
    <div>
        <NavBar
         icon={<Icon type="left"  size="lg" />}
    leftContent="返回"
    onLeftClick={_ => props.history.goBack()}
    style={{minHeight: '7vh'}}>安全守护</NavBar>
    <div style={{minHeight: '93vh', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.3rem', width: '60vw', margin: '0 auto', color: 'gray', textAlign: 'center'}}>
    您还未设置安全守护，马上创建一个?
    </div>
        <Button type="primary" inline className="bottom-center-absolute" onClick={_ => props.history.push('/SafetyCenter/AddSafety')}>添加围栏</Button>
    </div>
);
  
  
export default SafetyCenter