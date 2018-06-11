import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { NavBar, Icon } from 'antd-mobile';
const MessageCenter = () => (
    <div>
       <NavBar
      icon={<Icon type="left" />}
      leftContent={<Link to="/" style={{color: 'white'}}>返回</Link>}
      rightContent="编辑"
      style={{minHeight: '7vh'}}>消息中心</NavBar>
    </div>
  );

  export default MessageCenter