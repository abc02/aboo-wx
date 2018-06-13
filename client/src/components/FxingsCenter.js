import React from 'react'
import history from './history';
import { NavBar, Icon, List, Button, SwipeAction  } from 'antd-mobile';
import Icon60 from '../assets/Icon-60@3x.png'
import UnBindShowAlert from './UnBindShowAlert'
// const alert = Modal.alert;
const Item = List.Item;
const Brief = Item.Brief;
const data = [
  {
    img: Icon60,
    fixingName: '设备10091',
    fixingCode: 201710300010091
  }
]
const Lists = (props) => {
  const Title = (
    <span style={{color: '#399af7', fontWeight: 'bold'}}>已绑定的鞋垫：</span>
  )
  return (<List renderHeader={Title}>
  {data.map((i, index) => {
    const Img = (
      <img src={i.img} alt={i.fixingName} style={{height: '40px', width: '40px', background: 'gray', border: '2px solid #399af7', borderRadius: '50%'}} />
    )
    const Tag = (
      <span style={{color: '#399af7', fontSize: '16px'}}>默认</span>
    )
    return (<SwipeAction key={index}
      style={{ backgroundColor: 'gray' }}
      autoClose
      right={[
        {
          text: '解除绑定',
          onPress: UnBindShowAlert,
          style: { backgroundColor: '#399af7', color: 'white' },
        },
      ]}
      onOpen={() => console.log('global open')}
      onClose={() => console.log('global close')}
    >
      <Item
        thumb={Img}
        extra={Tag}
        arrow="horizontal"
        onClick={e => console.log("onClick", history.push('/FixingsCenter/FixingDetails'))}
      >
         {i.fixingName} <Brief>鞋垫ID：{i.fixingCode}</Brief>
      </Item>
    </SwipeAction>)
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
    rightContent={<Icon type="cross" size="lg" color="white" onClick={_ => history.push('/')}/>}
    style={{minHeight: '7vh'}}>我的鞋垫</NavBar>
     <Lists />
     <Button type="primary" inline style={addfixingStyle}>添加新的鞋垫</Button>
    </div>
);
  
export default FixingsCenter