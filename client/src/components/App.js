import React, { Component } from 'react';
import { Drawer, NavBar, Icon } from 'antd-mobile';
import { Map } from 'react-amap';
// import Geolocation from 'react-amap-plugin-geolocation';
import Sidebar from './Sidebar'
// import Map from './Map'
import './App.css';
import zoom_in from '../assets/zoom_in.png'
import zoom_out from '../assets/zoom_out.png'
import icon_mainlocat from '../assets/icon_mainlocat@2x.png'
import icon_satellite from '../assets/icon_satellite@2x.png'
import getLastPosition from '../assets/getLastPosition.png'
import icon_Mode from '../assets/icon_Mode@2x.png'
import icon_Child from '../assets/icon_Child.png'
import icon_Wifi from '../assets/icon_Wifi.png'
// 定位插件
// const pluginProps = {
//   enableHighAccuracy:true,
//   timeout: 10000,
//   // buttonOffset: Map.Pixel(100, 200),
//   buttonDom: `<img src=${icon_mainlocat} alt="icon_mainlocat" style='width: 50px; height: 50px; background: #fff; border-radius: 50%; box-shadow: 0 0 3px rgba(0, 0, 0, .6);' />`
// }

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
const LocationCtrl = (props) => {
  const map = props.__map__;
  if (!map) {
    console.log('组件必须作为 Map 的子组件使用');
    return;
  }
  const style = {
    position: 'absolute',
    bottom: '22vh',
    left: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
    // boxShadow: '0 0 3px rgba(0, 0, 0, .6)'
  }
  const buttonStyle = {
    width: '40px',
    height: '40px',
    background: '#fff',
    borderRadius: '50%', 
    boxShadow: '0 0 3px rgba(0, 0, 0, .6)',
    marginBottom: '12px'
  }
  return (<div style={style}>
    <img src={icon_mainlocat} alt="icon_mainlocat" style={buttonStyle} />
  </div>);
}
const GetLastPosition = (props) => {
  const map = props.__map__;
  if (!map) {
    console.log('组件必须作为 Map 的子组件使用');
    return;
  }
  const style = {
    position: 'absolute',
    bottom: '22vh',
    right: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
    // boxShadow: '0 0 3px rgba(0, 0, 0, .6)'
  }
  const buttonStyle = {
    width: '60px',
    height: '60px'
  }
  const textStyle = {
    padding: '5px',
    fontSize: '12px',
    borderRadius: '5px',
    background: 'rgba(255, 255, 255, .5)',
  }
  return (<div style={style}>
    <img src={getLastPosition} alt="getLastPosition" style={buttonStyle} />
    <div style={textStyle}>更新位置</div>
  </div>);
}
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
// 缩放组件
const ZoomCtrl = (props) => {
  const map = props.__map__;
  if (!map) {
    console.log('组件必须作为 Map 的子组件使用');
    return;
  }
  const style = {
    position: 'absolute',
    top: '50%',
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
const BottomCtrl = (props) => {
  const map = props.__map__;
  if (!map) {
    console.log('组件必须作为 Map 的子组件使用');
    return;
  }
  const style = {
    position: 'absolute',
    height: '20vh',
    left: '10px',
    right: '10px',
    bottom: '10px',
    background: '#fff',
   
    // display: 'flex',
    // flexDirection: 'column',
    // transform: 'translateY(-50%)',
    boxShadow: '0 0 3px rgba(0, 0, 0, .6)',
    zIndex: '9999'
  }
  const container = {
    margin: '6px',
    paddingBottom: '6px',
    borderBottom: '1px solid rgba(0,0,0, .15)'
  }
  const ModeStyle = {
    position: 'absolute',
    left: '-25px',
    width: '20px',
    height: '20px'
  }
  const addressStyle = {
    position: 'relative',
    marginLeft: '30px',
    marginBottom: '6px',
    height: '20px',
    lineHeight: '20px',
    fontSize: '12px',
    color: 'gray'
  }
  const colorStyle = {
    color: '#399af7'
  }
  return (<div style={style}>
    <div style={container}>
      <h2>洪渡桥村东59米</h2>
      <p style={addressStyle}><img src={icon_Wifi} alt="icon_mode" style={ModeStyle} />&nbsp;<span>精准度30米</span> &nbsp;<span style={colorStyle}>浙江温州市乐清市沙洪撸</span></p>
      <p>15:31更新</p>
    </div>
  </div>);
}
const BottomCtrl2 = (props) => {
  return (<div>
  123
  </div>);
}
class App extends Component {
  state = {
    leftOpen: false,
    bottomOpen: false
  }
  onDock = (d) => {
    this.setState({
      [d]: !this.state[d],
    });
  }
  render() {
    return (<div style={{height: '100%'}}>
     <NavBar
        icon={<Icon type="ellipsis" />}
        onLeftClick={() => this.onDock('leftOpen')}
        rightContent="消息"
        style={{minHeight: '7vh'}}>阿布跑跑</NavBar>
      <Drawer
        className="left-drawer"
        style={{ minHeight: '93vh'}}
        enableDragHandle
        // contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
        sidebar={Sidebar}
        open={this.state.leftOpen}
        onOpenChange={() => this.onDock('leftOpen')}
      >
         {/* <Map amapkey="a1a4b0c0db52f71366ae4732e531748a" style={{minHeight: '93vh'}}> 
          <Geolocation {...pluginProps} />
          <ZoomCtrl />
          <LayerCtrl />
          <LeftTopCtrl />
          <GetLastPosition />
        </Map> */}
      </Drawer>
      <Drawer
        className="bottom-drawer"
        style={{ minHeight: '93vh', marginTop: '7vh' }}
        enableDragHandle
        position='bottom'
        sidebar={Sidebar}
        open={this.state.bottomOpen}
        onOpenChange={() => this.onDock('bottomOpen')}
      >
         <Map amapkey="a1a4b0c0db52f71366ae4732e531748a" style={{minHeight: '93vh'}}> 
          <LeftTopCtrl />
          <ZoomCtrl />
          <LayerCtrl />
          <GetLastPosition />
          <BottomCtrl />
          <LocationCtrl />
        </Map>
      </Drawer>
     
       {/* <NavBar icon={<Icon type="ellipsis" />} onLeftClick={() => this.onDock('open')}>
        Docked in document
      </NavBar>
      <Drawer
        className="my-drawer"
        style={{ minHeight: document.documentElement.clientHeight }}
        contentStyle={{ color: '#A6A6A6', textAlign: 'center'}}
        sidebarStyle={{ border: '1px solid #ddd' }}
        sidebar={sidebar}
        open={this.state.open}
        docked={this.state.docked}
      >
         <Map amapkey="a1a4b0c0db52f71366ae4732e531748a" style={{minHeight: '93vh'}}> 
          <Geolocation {...pluginProps} />
          <ZoomCtrl />
          <LayerCtrl />
          <LeftTopCtrl />
          <GetLastPosition />
        </Map>
      </Drawer> */}
    </div>);
  }
}

export default App;
