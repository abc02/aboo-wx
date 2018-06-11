import React from 'react'
import icon_satellite from '../assets/icon_satellite@2x.png'
// 图层组件
const LayerCtrl = (props) => {
  const map = props.__map__;
  if (!map) {
    console.log('组件必须作为 Map 的子组件使用');
    return;
  }
  const style = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: '#fff',
    boxShadow: '0 0 3px rgba(0, 0, 0, .6)'
  }
  const buttonStyle = {
    width: '40px',
    height: '40px'
  }
  return (<div style={style}>
    <img src={icon_satellite} alt="icon_satellite" style={buttonStyle} />
  </div>);
}

export default LayerCtrl