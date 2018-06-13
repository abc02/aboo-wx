import React from 'react'
import { Link } from 'react-router-dom'
import { NavBar, Icon, List, WhiteSpace  } from 'antd-mobile';
// import Administrators from '../assets/Administrators@3x.png'
// import binding from '../assets/binding@3x.png'
import Callthepolice from '../assets/Callthepolice@3x.png'
// import Electricquantity from '../assets/Electricquantity@3x.png'
// import feedback from '../assets/feedback@3x.png'
// import motion from '../assets/motion@3x.png'
// import Notice from '../assets/Notice@3x.png'
// import publicwelfare from '../assets/publicwelfare@3x.png'
const Item = List.Item;
const Brief = Item.Brief;
const data = [
    {
      img: Callthepolice,
      creationTime: "08:30",
      title: '报警提醒',
      content: '您的"设备10091"鞋垫进入了"公司"'
    },
    {
      img: Callthepolice,
      creationTime: "07:57",
      title: '报警提醒',
      content: '您的"设备10091"鞋垫离开了"正泰高科技工业园"'
    },
    {
      img: Callthepolice,
      creationTime: "07:50",
      title: '报警提醒',
      content: '您的"设备10091"鞋垫进入了"正泰高科技工业园"'
    },
    {
      img: Callthepolice,
      creationTime: "07:37",
      title: '报警提醒',
      content: '您的"设备10091"鞋垫离开了"茗西警务室"'
    },
    {
      img: Callthepolice,
      creationTime: "07:37",
      title: '报警提醒',
      content: '您的"设备10091"鞋垫离开了"家"'
    },
    {
      img: Callthepolice,
      creationTime: "昨天22:15",
      title: '报警提醒',
      content: '您的"设备10091"鞋垫进入了"家"'
    }
  ]

const Lists = (props) => {
  return (<List>
  {data.map((i, index) => {
    return (<Item key={index}
      thumb={i.img}
    >
     <WhiteSpace size="md" />
      {i.title} <span>{i.creationTime}</span><Brief>{i.content}</Brief>
      <WhiteSpace size="md" />
    </Item>);
  })}
</List>)
};
const MessageCenter = () => (
  <div>
      <NavBar
    icon={<Icon type="left" size="lg" />}
    leftContent={<Link to="/" style={{color: 'white', fontWeight: 'bold'}}>返回</Link>}
    rightContent="编辑"
    style={{minHeight: '7vh'}}>消息中心</NavBar>
    <Lists />
  </div>
);

export default MessageCenter