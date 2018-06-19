import React from 'react'
import history from './history';
import { Flex, Icon, Card, WingBlank, WhiteSpace } from 'antd-mobile';
import zoom_in from '../assets/zoom_in.png'
import icon_Wifi from '../assets/icon_Wifi.png'
import Icon60 from '../assets/Icon-60@3x.png'
// import icon_gif_success from '../assets/icon_gif_success.png'
import icon_Battery from '../assets/icon_Battery.png'
import icon_cardmini from '../assets/icon_cardmini@3x.png'
import trackimage from '../assets/trackimage.png'
import commonweal from '../assets/commonweal@2x.png'
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
  const batteryStyle = {
    width: '32px',
    height: '12px'
  }
const fixingElement = (<div>
    <h4 style={titleStyle}>温州鞋都网络科技有限公司北门50米</h4>
    <p style={addressStyle}><img src={icon_Wifi} alt="icon_mode" style={ModeStyle} />&nbsp;<span>精准度30米</span> &nbsp;<span style={colorStyle}>浙江温州市鹿城区昆仑路72号A栋201</span></p>
    <p style={textStyle}>15:31更新</p>
</div>)
const commonwealElement = (<div>
<span style={boldStyle}>ABOO阿布跑跑</span><span style={textStyle}>&nbsp;|&nbsp;公益</span>
</div>)

const vipElement = (<div>
<span style={boldStyle}>阿布跑跑月卡</span><span style={textStyle}>&nbsp;|&nbsp;领卡享无忧定位</span>
</div>)
const trackElement = (<div>
<span style={boldStyle}>历史轨迹</span>
</div>)
const securityElement = (<div>
<span style={boldStyle}>安全守护</span>
</div>)
// const exerciseElement = (<div>
// <span style={boldStyle}>阿布记录</span><span style={textStyle}>&nbsp;|&nbsp;今天</span>
// </div>)

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
          <img style={fixingStyle} src={Icon60} alt="tx" />
          <img style={fixingStyle} src={zoom_in} alt="addfixing" />
        </Flex>
        <WhiteSpace size="lg" />
         <Flex justify="center">
          <span style={{ fontWeight: 'bold'}}>设备10091</span> &nbsp;&nbsp;<span style={colorStyle}>87%</span>&nbsp;&nbsp;<img src={icon_Battery} style={batteryStyle} alt="icon_battery" />
         </Flex>
      </Card.Body>
      {/* <Card.Footer content="footer content" extra={<div>extra footer content</div>} /> */}
    </Card>
    <WhiteSpace size="lg" />
  </WingBlank>
  <WingBlank size="lg">
    <WhiteSpace size="lg" />
    <Card onClick={_ => history.push('/FixingsCenter/FixingDetails/VipCenter')}>
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
    <Card onClick={_ => history.push('/SafetyCenter')}>
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
  {/* <WingBlank size="lg">
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
    </Card>
    <WhiteSpace size="lg" />
  </WingBlank> */}
    <WingBlank size="lg">
      <WhiteSpace size="lg" />
      <Card onClick={_ => history.push('/PublicBenefit')}>
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

export default BottomCtrlbar