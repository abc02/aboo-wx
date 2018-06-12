import React from 'react'
import { Link } from 'react-router-dom'
import { NavBar, Icon, List, Button, WhiteSpace  } from 'antd-mobile';
import Icon60 from '../assets/Icon-60@3x.png'

const Item = List.Item;
const Brief = Item.Brief;
const data = [
  {
    img: Icon60,
    fixingName: '设备10094',
    fixingCode: 201710300010091
  }
]
const Lists = (props) => {
  return (<List renderHeader={() => '已绑定的鞋垫：'}>
  {data.map((i, index) => {
    return (<Item key={index}
      thumb={i.img}
      arrow="horizontal"
    >
     <WhiteSpace size="md" />
      {i.fixingName} <Brief>鞋垫ID：{i.fixingCode}</Brief>
      <WhiteSpace size="md" />
    </Item>);
  })}
</List>)
};
const addfixingStyle = {
  position: 'absolute',
  bottom: '3vh',
  left: '50%',
  transform: 'translateX(-50%)',
  borderRadius: '30px'
}
const FixingsCenter = () => (
    <div>
        <NavBar
    rightContent={<Link to="/"><Icon type="cross" size="lg" color="white"/></Link>}
    style={{minHeight: '7vh'}}>我的鞋垫</NavBar>
     <Lists />
     <Button type="primary" inline style={addfixingStyle}>添加新的鞋垫</Button>
    </div>
);
  
export default FixingsCenter