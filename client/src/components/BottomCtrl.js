import React from 'react'
import { Flex, Card, WingBlank, WhiteSpace } from 'antd-mobile';
import zoom_in from '../assets/zoom_in.png'
import icon_Wifi from '../assets/icon_Wifi.png'
import Icon60 from '../assets/Icon-60@3x.png'
import icon_Battery from '../assets/icon_Battery.png'
import icon_mainlocat from '../assets/icon_mainlocat@2x.png'
import getLastPosition from '../assets/getLastPosition.png'


const BottomCtrl = (props) => {
  const map = props.__map__;
  let Y, startY, moveEndY
  if (!map) {
    console.log('组件必须作为 Map 的子组件使用');
    return;
  }
  const style = {
    position: 'absolute',
    // height: '20vh',
    left: '0',
    right: '0',
    bottom: '0',
    // background: '#fff',
    // display: 'flex',
    // flexDirection: 'column',
    // transform: 'translateY(-50%)',
    // boxShadow: '0 0 3px rgba(0, 0, 0, .6)',
    // zIndex: '999'
  }
  const titleStyle = {
    marginBottom: '8px'
  }
  const ModeStyle = {
    position: 'absolute',
    left: '-25px',
    width: '20px',
    height: '20px'
  }
  const textStyle = {
    fontSize: '12px',
    color: 'gray'
  }
  const addressStyle = {
    position: 'relative',
    marginLeft: '30px',
    marginBottom: '6px',
    height: '20px',
    lineHeight: '20px',
    ...textStyle
  }
  const colorStyle = {
    ...textStyle,
    color: '#399af7'
  }
  const fixingStyle = {
    width: '40px',
    height: '40px',
    marginRight: '12px',
    borderRadius: '50%',
    boxShadow: '0 0 1px rgba(0, 0, 0, .5)',
  }
  const batteryStyle = {
    width: '32px',
    height: '12px'
  }
  const mainlocatStyle = {
    marginLeft: '6px',
    background: 'white',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    boxShadow: '0 0 1px rgba(0, 0, 0, .5)',
  }
  const getLastPositionStyle = {
    width: '60px',
    height: '60px',
  }
  const getLastPositionTextSyle = {
    marginRight: '6px',
    background: 'rgba(255,255,255, .8)',
    padding: '6px',
    borderRadius: '4px',
    fontSize: '12px',
    color: 'gray'
  }
  let handleTouchStart = (e) => {
    // e.nativeEvent.preventDefault()
    startY = e.changedTouches[0].pageY
  }
  let handleTouchMove = (e) => {
    // e.nativeEvent.preventDefault()
    moveEndY = e.changedTouches[0].pageY
  }
  let handleTouchEnd = (e) => {
    Y = moveEndY - startY;
    console.log(Y, moveEndY, startY)
    if (Y > 0) {
      console.log("up -> down");
    } else {
      props.onDock()
      console.log("down -> up");
    }
  }
  const modifyStyle = {
    ...style,
    display: props.bottomOpen ? 'none' : 'block'
  }
  const fixingElement = (<div>
    <h4 style={titleStyle}>温州鞋都网络科技有限公司北门50米</h4>
    <p style={addressStyle}><img src={icon_Wifi} alt="icon_mode" style={ModeStyle} />&nbsp;<span>精准度30米</span> &nbsp;<span style={colorStyle}>浙江温州市鹿城区昆仑路72号A栋201</span></p>
    <p style={textStyle}>15:31更新</p>
  </div>)
  const Mainlocat = () => (
    <img src={icon_mainlocat} alt="icon_mainlocat" style={mainlocatStyle}/>
  )
  const GetLastPosition = () => (<div>
    <img src={getLastPosition} alt="getLastPosition" style={getLastPositionStyle}/>
    <p style={getLastPositionTextSyle}>更新位置</p>
    </div>
  )
  return (<div style={modifyStyle} >
    <Flex justify="between" style={{marginBottom: '6px'}}>
      <Mainlocat />
      <GetLastPosition />
    </Flex>
    <WingBlank size="lg">
      <Card 
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Card.Header
          title={fixingElement}
        // thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
        // extra={<span>this is extra</span>}
        />
        <Card.Body>
          <Flex justify="center">
            <img style={fixingStyle} src={Icon60} alt="Icon60" />
            <img style={fixingStyle} src={zoom_in} alt="addfixing" />
          </Flex>
          <WhiteSpace size="lg" />
          <Flex justify="center">
            <span style={{ fontWeight: 'bold' }}>设备10091</span> &nbsp;&nbsp;<span style={colorStyle}>87%</span>&nbsp;&nbsp;<img src={icon_Battery} style={batteryStyle} alt="icon_battery" />
          </Flex>
        </Card.Body>
        {/* <Card.Footer content="footer content" extra={<div>extra footer content</div>} /> */}
      </Card>
      <WhiteSpace size="lg" />
    </WingBlank>
  </div>);
}

export default BottomCtrl