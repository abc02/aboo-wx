import React, { Component } from 'react';
import { Flex, Drawer, NavBar, Icon, Card, WingBlank, WhiteSpace } from 'antd-mobile';
import { Map } from 'react-amap';
// import Geolocation from 'react-amap-plugin-geolocation';
import Sidebar from './Sidebar'
// import Map from './Map'
import './App.css';
import zoom_in from '../assets/zoom_in.png'
import zoom_out from '../assets/zoom_out.png'
// import icon_mainlocat from '../assets/icon_mainlocat@2x.png'
import icon_satellite from '../assets/icon_satellite@2x.png'
// import getLastPosition from '../assets/getLastPosition.png'
import icon_Mode from '../assets/icon_Mode@2x.png'
import icon_Child from '../assets/icon_Child.png'
import icon_Wifi from '../assets/icon_Wifi.png'
import icon_Battery from '../assets/icon_Battery.png'
import icon_gif_success from '../assets/icon_gif_success.png'
import commonweal from '../assets/commonweal@2x.png'
import trackimage from '../assets/trackimage.png'
import icon_cardmini from '../assets/icon_cardmini@3x.png'
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
// const LocationCtrl = (props) => {
//   const map = props.__map__;
//   if (!map) {
//     console.log('组件必须作为 Map 的子组件使用');
//     return;
//   }
//   const style = {
//     position: 'absolute',
//     bottom: '22vh',
//     left: '10px',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center'
//     // boxShadow: '0 0 3px rgba(0, 0, 0, .6)'
//   }
//   const buttonStyle = {
//     width: '40px',
//     height: '40px',
//     background: '#fff',
//     borderRadius: '50%', 
//     boxShadow: '0 0 3px rgba(0, 0, 0, .6)',
//     marginBottom: '12px'
//   }
//   return (<div style={style}>
//     <img src={icon_mainlocat} alt="icon_mainlocat" style={buttonStyle} />
//   </div>);
  
// }
// const GetLastPosition = (props) => {
//   const map = props.__map__;
//   if (!map) {
//     console.log('组件必须作为 Map 的子组件使用');
//     return;
//   }
//   const style = {
//     position: 'absolute',
//     bottom: '22vh',
//     right: '10px',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center'
//     // boxShadow: '0 0 3px rgba(0, 0, 0, .6)'
//   }
//   const buttonStyle = {
//     width: '60px',
//     height: '60px'
//   }
//   const textStyle = {
//     padding: '5px',
//     fontSize: '12px',
//     borderRadius: '5px',
//     background: 'rgba(255, 255, 255, .5)',
//   }
//   return (<div style={style}>
//     <img src={getLastPosition} alt="getLastPosition" style={buttonStyle} />
//     <div style={textStyle}>更新位置</div>
//   </div>);
// }
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
// const BottomCtrl = (props) => {
//   // console.log(props)
//   const map = props.__map__;
//   if (!map) {
//     console.log('组件必须作为 Map 的子组件使用');
//     return;
//   }
//   const style = {
//     position: 'absolute',
//     // height: '20vh',
//     left: '10px',
//     right: '10px',
//     bottom: '10px',
//     background: '#fff',
   
//     // display: 'flex',
//     // flexDirection: 'column',
//     // transform: 'translateY(-50%)',
//     boxShadow: '0 0 3px rgba(0, 0, 0, .6)',
//     zIndex: '999'
//   }
//   const container = {
//     margin: '6px',
//     paddingBottom: '6px',
//     borderBottom: '1px solid rgba(0,0,0, .15)'
//   }
//   const titleStyle = {
//     marginBottom: '8px'
//   }
//   const ModeStyle = {
//     position: 'absolute',
//     left: '-25px',
//     width: '20px',
//     height: '20px'
//   }
//   const textStyle = {
//     fontSize: '12px',
//     color: 'gray'
//   }
//   const addressStyle = {
//     position: 'relative',
//     marginLeft: '30px',
//     marginBottom: '6px',
//     height: '20px',
//     lineHeight: '20px',
//     ...textStyle
//   }
//   const colorStyle = {
//     ...textStyle,
//     color: '#399af7'
//   }
//   const fixingsStyle = {
//     display: 'flex',
//     justifyContent: 'center',
//     marginBottom: '6px'
//   }

//   // const addFixingStyle = {
//   //   ...fixingStyle
//   // // }
//   // const fxingInfoStyle = {
//   //   ...fixingsStyle,
//   //   ...colorStyle,
//   //   height: '20px',
//   //   lineHeight: '20px'
//   // }
//   const infoTitleStsyle = {
//     fontWeight: 'bold'
//   }
//   const batteryStyle = {
//     width: '41px',
//     height: '16px'
//   }
//   const mainLocatButtonStyle = {
//     position: 'absolute',
//     top: '-52px',
//     width: '40px',
//     height: '40px',
//     background: '#fff',
//     borderRadius: '50%', 
//     boxShadow: '0 0 3px rgba(0, 0, 0, .6)',
//   }
//   const getLastPositionStyle = {
//     position: 'absolute',
//     top: '-86px',
//     right: '0',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center'
//     // boxShadow: '0 0 3px rgba(0, 0, 0, .6)'
//   }
//   const getLastPositionButtonStyle = {
//     width: '60px',
//     height: '60px'
//   }
//   const textBackgroundStyle = {
//     padding: '5px',
//     fontSize: '12px',
//     borderRadius: '5px',
//     background: 'rgba(255, 255, 255, .5)',
//   }
//   return (<div style={style} onClick={props.onDock}>
//     <img src={icon_mainlocat} alt="icon_mainlocat" style={mainLocatButtonStyle} />
//     <div style={getLastPositionStyle}>
//       <img src={getLastPosition} alt="getLastPosition" style={getLastPositionButtonStyle} />
//       <div style={textBackgroundStyle}>更新位置</div>
//     </div>
//     <div style={container}>
//       <h4 style={titleStyle}>温州鞋都网络科技有限公司北门50米</h4>
//       <p style={addressStyle}><img src={icon_Wifi} alt="icon_mode" style={ModeStyle} />&nbsp;<span>精准度30米</span> &nbsp;<span style={colorStyle}>浙江温州市鹿城区昆仑路72号A栋201</span></p>
//       <p style={textStyle}>15:31更新</p>
//     </div>
//     <div style={fixingsStyle}>
     
//     </div>
//     <div style={fxingInfoStyle}>
//       <span style={infoTitleStsyle}>设备10091</span> &nbsp;&nbsp;<span>87%</span>&nbsp;&nbsp;<img src={icon_Battery} style={batteryStyle} alt="icon_battery" />
//     </div>
//   </div>);
// }
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
const boldStyle = {
  ...textStyle,
  fontWeight: 'bold'
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
const fixingElement = (<div>
      <h4 style={titleStyle}>温州鞋都网络科技有限公司北门50米</h4>
      <p style={addressStyle}><img src={icon_Wifi} alt="icon_mode" style={ModeStyle} />&nbsp;<span>精准度30米</span> &nbsp;<span style={colorStyle}>浙江温州市鹿城区昆仑路72号A栋201</span></p>
      <p style={textStyle}>15:31更新</p>
</div>)
const commonwealElement = (<div>
  <span style={boldStyle}>ABOO阿布跑跑</span><span style={textStyle}>&nbsp;|&nbsp;公益</span>
</div>)
// const PlaceHolder = ({ className = '', ...restProps }) => (
//   <div className={`${className} placeholder`} {...restProps}>Block</div>
// );

// const element2 =  React.createElement("div", { className: "element" }, 'i am element')
const vipElement = (<div>
  <span style={boldStyle}>阿布跑跑月卡</span><span style={textStyle}>&nbsp;|&nbsp;领卡享无忧定位</span>
</div>)
const trackElement = (<div>
  <span style={boldStyle}>历史轨迹</span>
</div>)
// const TrackIframe = ({ className = '', ...restProps }) => (
//   <iframe src="https://trail.abpao.com/share/?Snd0VG9rZW49ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SlZjMlZ5U1dRaU9pSXhNU0lzSW1WNGNDSTZNVFV6TURReE5qWTVNbjAuLU05eEs0dDBlNXBGOWpWWjI0S3c5ejd4WWxQYjdtNXFJbWptcFotZE1DcyZ1c2VySWQ9MTEmZml4aW5nSWQ9MjAxNzEwMzAwMDEwMDkxJnRpbWU9MjAxOC0wNi0wMQ==" 
//   width="100%" height="100%" frameborder="0" scrolling="yes" />
// );
const securityElement = (<div>
  <span style={boldStyle}>安全守护</span>
</div>)
const exerciseElement = (<div>
  <span style={boldStyle}>阿布记录</span><span style={textStyle}>&nbsp;|&nbsp;今天</span>
</div>)
// const fxingInfoStyle = {
//   ...colorStyle,
//   height: '20px',
//   lineHeight: '20px'
// }
const infoTitleStsyle = {
  fontWeight: 'bold'
}
const batteryStyle = {
  width: '32px',
  height: '12px'
}
const  BottomCtrl2 = (props) => {
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
    　if ( Y > 0 ) {
　　　　　　console.log("up -> down");
　　　　}else{
          props.onDock()
　　　　　　console.log("down -> up");
　　　　}
  }
  const modifyStyle = {
    ...style,
    display: props.bottomOpen ? 'none' : 'block'
  }
  return (<div style={modifyStyle}
    onTouchStart={handleTouchStart}
    onTouchMove={handleTouchMove}
    onTouchEnd={handleTouchEnd}>
     <WingBlank size="lg">
    <Card>
      <Card.Header
        title={fixingElement}
        // thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
        // extra={<span>this is extra</span>}
      />
      <Card.Body>
        <Flex justify="center">
          <img style={fixingStyle} src={icon_gif_success} alt="tx" />
          <img style={fixingStyle} src={zoom_in} alt="addfixing" />
        </Flex>
        <WhiteSpace size="lg" />
         <Flex justify="center">
          <span style={infoTitleStsyle}>设备10091</span> &nbsp;&nbsp;<span style={colorStyle}>87%</span>&nbsp;&nbsp;<img src={icon_Battery} style={batteryStyle} alt="icon_battery" />
         </Flex>
      </Card.Body>
      {/* <Card.Footer content="footer content" extra={<div>extra footer content</div>} /> */}
    </Card>
    <WhiteSpace size="lg" />
  </WingBlank>
 </div>);
}
const BottomCtrlbar = (<div style={{height: '100%'}}>
  <WingBlank size="lg">
    <WhiteSpace size="lg" />
    <Card>
      <Card.Header
        title={fixingElement}
        // thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
        // extra={<span>this is extra</span>}
      />
      <Card.Body>
        <Flex justify="center">
          <img style={fixingStyle} src={icon_gif_success} alt="tx" />
          <img style={fixingStyle} src={zoom_in} alt="addfixing" />
        </Flex>
        <WhiteSpace size="lg" />
         <Flex justify="center">
          <span style={infoTitleStsyle}>设备10091</span> &nbsp;&nbsp;<span style={colorStyle}>87%</span>&nbsp;&nbsp;<img src={icon_Battery} style={batteryStyle} alt="icon_battery" />
         </Flex>
      </Card.Body>
      {/* <Card.Footer content="footer content" extra={<div>extra footer content</div>} /> */}
    </Card>
    <WhiteSpace size="lg" />
  </WingBlank>
  <WingBlank size="lg">
    <WhiteSpace size="lg" />
    <Card>
      <Card.Header
        title={vipElement}
        // thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
        // extra={<span>this is extra</span>}
      />
      <Card.Body style={{padding: '0'}}>
        <div style={{background: '#399af7', color: 'white'}}>
        <WingBlank size="lg">
          <Flex> 
            <Flex.Item>
            <WhiteSpace size="md" />
            <h2>阿布跑跑月卡</h2>
            <WhiteSpace size="md" />
            <h2>ABOO</h2>
            </Flex.Item>
            <Flex.Item style={{textAlign: 'right'}}>
              <img src={icon_cardmini} alt={icon_cardmini} style={{width: '40px', height: '55px'}}/>
            </Flex.Item>
          </Flex>
          <WhiteSpace size="md" />
          <div style={{height: '1px', background: 'rgba(255,255,255, .5)'}}></div>
          <WhiteSpace size="md" />
          <p >有效期日期 &nbsp; 2018年12月31日</p>
          <WhiteSpace size="md" />
          </WingBlank>
        </div>
        <WhiteSpace size="md" />
      </Card.Body>
      <Card.Footer content="查看月卡详情" extra={<Icon type="right" />} />
    </Card>
    <WhiteSpace size="lg" />
  </WingBlank>
  <WingBlank size="lg">
    <WhiteSpace size="lg" />
    <Card>
      <Card.Header
        title={trackElement}
        // thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
        extra={ <Flex justify="end"><p style={textStyle}>查看详情</p><Icon type="right" /></Flex>}
      />
      <Card.Body style={{padding: '0'}}>
        <img src={trackimage} style={{width: '100%', height: '120px'}} alt="trackimage" />
        <WingBlank size="md">
          <h4>浙江省温州市鹿城区昆仑路72号[鹿城金融广场内]</h4>
          <WhiteSpace size="xs" />
          <p style={addressStyle}><img src={icon_Wifi} alt="icon_mode" style={ModeStyle} />&nbsp;<span>精准度30米</span> &nbsp;<span >| &nbsp;2018-06-07 15:03:46</span></p>
        </WingBlank>
      </Card.Body>
      {/* <Card.Footer content="footer content" extra={<div>extra footer content</div>} /> */}
    </Card>
    <WhiteSpace size="lg" />
  </WingBlank>
  <WingBlank size="lg">
    <WhiteSpace size="lg" />
    <Card>
      <Card.Header
        title={securityElement}
        // thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
        extra={ <Flex justify="end"><p style={textStyle}>设置</p><Icon type="right" /></Flex>}
      />
      <Card.Body>
        <Flex justify="center">
        <h2 style={{fontWeight: 'normal',color: 'gray', fontSize: '21px', width: '200px', padding: '30px 0'}}>您还未设置安全守护,点击马上创建一个！</h2>
        </Flex>
      </Card.Body>
      {/* <Card.Footer content="footer content" extra={<div>extra footer content</div>} /> */}
    </Card>
    <WhiteSpace size="lg" />
  </WingBlank>
  <WingBlank size="lg">
    <WhiteSpace size="lg" />
    <Card>
      <Card.Header
        title={exerciseElement}
        // thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
        extra={ <Flex justify="end"><p style={textStyle}>更多详情</p><Icon type="right" /></Flex>}
      />
      <Card.Body>
      <Flex justify="center">
        <Flex.Item>
          <p style={textStyle}>步数</p>
          <h2 style={{color: 'red'}}>0/5186步</h2>
          </Flex.Item>
          </Flex>
          <WhiteSpace size="md" />
        <Flex justify="center">
          <Flex.Item>
            <p style={textStyle}>距离</p>
            <p>0.00/43021公里</p>
          </Flex.Item>
          <Flex.Item>
            <p style={textStyle}>卡路里</p>
            <p>0/0千卡</p>
          </Flex.Item>
        </Flex>
      </Card.Body>
      {/* <Card.Footer content="footer content" extra={<div>extra footer content</div>} /> */}
    </Card>
    <WhiteSpace size="lg" />
  </WingBlank>
    <WingBlank size="lg">
      <WhiteSpace size="lg" />
      <Card>
        <Card.Header
          title={commonwealElement}
          // thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
          extra={ <Flex justify="end"><p style={textStyle}>查看 </p><Icon type="right" /></Flex>}
        />
        <Card.Body style={{padding: '0'}}>
          <img src={commonweal} alt="commonweal" style={{width: '100%', height: '120px'}} />
          <WingBlank size="md">
            <h4>浙江省金华市13岁男孩走失</h4>
            <WhiteSpace size="xs" />
            <p style={textStyle}>季伟,男,13岁,2005年1月4日出生，身高165cm，身材偏瘦，义乌市上溪镇上楼宅村人，于2018年6月5日12时44分在义乌...</p>
          </WingBlank>
        </Card.Body>
        {/* <Card.Footer content="footer content" extra={<div>extra footer content</div>} /> */}
      </Card>
      <WhiteSpace size="lg" />
    </WingBlank>
</div>);
class App extends Component {
  state = {
    leftOpen: false,
    bottomOpen: false
  }
  onDock = (d) => {
    // alert(d)
    this.setState({
      [d]: !this.state[d],
    });
  }
  render() {
    return (<div style={{height: '100%'}}>
     <NavBar
        icon={this.state.bottomOpen ?  <Icon type="down" /> : <Icon type="ellipsis" />}
        onLeftClick={() => this.onDock(this.state.bottomOpen ? 'bottomOpen' :'leftOpen')}
        rightContent="消息"
        style={{minHeight: '7vh'}}>阿布跑跑</NavBar>
      <Drawer
        className="left-drawer"
        style={{ minHeight: '93vh', zIndex: '9999'}}
        // style={{ zIndex: '99999'}}
        // enableDragHandle
        // sidebarStyle={{ zIndex: '99999'}}
        // contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
        // overlayStyle={{background: 'red'}}
        // dragHandleStyle={{ zIndex: '99999'}}
        sidebar={Sidebar}
        open={this.state.leftOpen}
        onOpenChange={() => this.onDock('leftOpen')}
      >
        <Map amapkey="a1a4b0c0db52f71366ae4732e531748a" style={{minHeight: '93vh'}}> 
          <LeftTopCtrl />
          <ZoomCtrl />
          <LayerCtrl />
          <BottomCtrl2 onDock={() => this.onDock('bottomOpen')} bottomOpen={this.state.bottomOpen}/>
        </Map>
      </Drawer>
      <Drawer
        className="bottom-drawer"
        style={{ minHeight: '93vh', marginTop: '7vh', zIndex: this.state.bottomOpen ? '99999' : '1' }}
        // enableDragHandle
        sidebarStyle={{boxShadow: '0 0 rgba(0, 0, 0, 0)', height: '100%' }}
        // overlayStyle={{backgroundColor: 'rgba(0, 0, 0, 0)'}}
        position='bottom'
        sidebar={BottomCtrlbar}
        open={this.state.bottomOpen}
        onOpenChange={() => this.onDock('bottomOpen')}
      >
        <div />
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
