import React  from 'react'
import zoom_in from '../assets/zoom_in.png'
import zoom_out from '../assets/zoom_out.png'
// 缩放组件
const ZoomCtrl = (props) => {
    const map = props.__map__;
    if (!map) {
      console.log('组件必须作为 Map 的子组件使用');
      return;
    }
    const style = {
      position: 'absolute',
      top: '44%',
      right: '10px',
      display: 'flex',
      flexDirection: 'column',
      transform: 'translateY(-50%)',
      boxShadow: '0 0 3px rgba(0, 0, 0, .6)'
    }
    const buttonStyle = {
      width: '40px',
      height: '40px'
    }
    const zoomInStyle = {
      ...buttonStyle,
      borderBottom: '1px solid gray'
    }
    const zoomIn = () => map.zoomIn();
    const zoomOut = () => map.zoomOut();
  
    return (<div style={style}>
      <img src={zoom_in} alt="zoom_in" style={zoomInStyle} onClick={zoomIn} />
      <img src={zoom_out} alt="zoom_out" style={buttonStyle} onClick={zoomOut} />
    </div>);
  };

  export default ZoomCtrl