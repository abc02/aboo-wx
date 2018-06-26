import React from 'react'
import { NavBar, Icon, Card, Flex, WhiteSpace, WingBlank, Grid  } from 'antd-mobile';
import Icon60 from '../assets/Icon-60@3x.png'
import qrcode from '../assets/20171000010091.png'
import qq from '../assets/qq.png'
import wx from '../assets/wx.png'
import save from '../assets/save.png'


const Img = (
    <img src={Icon60} alt={Icon60} style={{ height: '80px', width: '80px', border: '2px solid rgba(0,0,0,0)', borderRadius: '50%' }} />
)
const Title = (
    <div>
        <h3>设备10091</h3>
        <WhiteSpace size="lg" />
        <div style={{ color: '#399af7', fontSize: '14px' }}>
            <p>扫一扫二维码</p>
            <WhiteSpace size="xs" />
            <p>立即绑定鞋垫加入家庭群微聊！</p>
        </div>
    </div>
)
const data = [
    '使用手机扫码二维码，安装阿布跑跑',
    '进入APP首页，点击“+”按钮后扫码二维码绑定',
    '管理员同意后，即可使用并参与微聊'
]
const Footer = (
    <ul>
        {
            data.map((i, index) => (
                <li key={index}>
                    {i}
                </li>
            ))
        }
    </ul>
)
const icons = [
    {
        icon: qq,
        text: 'QQ'
    },
    {
        icon: wx,
        text: '微信'
    },
    {
        icon: save,
        text: '保存'
    }
]
  
  const renderItem = (el, index) => (
    <div>
        <img src={el.icon} alt={el.text} style={{width: '50px', height: '50px', background: 'white', borderRadius: '50%'}}/>
        <WhiteSpace size="xs" />
        <p style={{color: 'white'}}>{el.text}</p>
    </div>
  )
const FixingQRCode = props => (
    <div style={{height: '100%', background: '#399af7'}}>
        <NavBar
            icon={<Icon type="left" size="lg" />}
            leftContent="返回"
            onLeftClick={_ => props.history.goBack()}
            style={{ minHeight: '7vh' }}>二维码</NavBar>
        <WingBlank size="lg">
            <WhiteSpace size="lg" />
            <Card>
                <Card.Header
                    title={Title}
                    thumb={Img}
                />
                <Card.Body>
                    <Flex justify="center">
                        <img src={qrcode} alt="qrcode" />
                    </Flex>
                </Card.Body>
                <WhiteSpace size="lg" />
                <WingBlank size="lg">
                    <Card.Footer content={Footer} />
                </WingBlank>
                <WhiteSpace size="lg" />
            </Card>
            <WhiteSpace size="xl" />
            <Grid className="FixingQRCode" data={icons} activeStyle={false}  columnNum={3} hasLine={false} square={false} renderItem={renderItem} />
        </WingBlank>
    </div>
)

export default FixingQRCode