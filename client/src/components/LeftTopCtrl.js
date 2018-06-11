import React from 'react';
import icon_Mode from '../assets/icon_Mode@2x.png'
import icon_Child from '../assets/icon_Child.png'
const LeftTopCtrl = (props) => {
    const map = props.__map__;
    if (!map) {
      console.log('组件必须作为 Map 的子组件使用');
      return;
    }
    const style = {
      position: 'absolute',
      top: '10px',
      left: '10px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
      // boxShadow: '0 0 3px rgba(0, 0, 0, .6)'
    }
    const buttonStyle = {
      width: '40px',
      height: '40px',
      background: '#fff',
      borderRadius: '50%', 
      boxShadow: '0 0 3px rgba(0, 0, 0, .6)',
      marginBottom: '6px'
    }
    const textStyle = {
      padding: '6px',
      fontSize: '12px',
      borderRadius: '10px',
      background: 'rgba(255, 255, 255, .5)',
    }
    return (<div style={style}>
      <div style={{marginBottom: '12px'}}>
        <img src={icon_Mode} alt="mode" style={buttonStyle} />
        <div style={textStyle}>定位频率</div>
      </div>
      <div>
        <img src={icon_Child} alt="child" style={buttonStyle} />
        <div style={textStyle}>找小孩</div>
      </div>
    </div>);
  }
  export default LeftTopCtrl