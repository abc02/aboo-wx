import React from 'react'
import { ActionSheet, Modal, NavBar, Icon, Flex, List, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import VipCover from './VipCover'
import UnBindShowAlert from './UnBindShowAlert'
import Icon60 from '../assets/Icon-60@3x.png'
const Item = List.Item;
// const Brief = Item.Brief;
// const alert = Modal.alert;
const prompt = Modal.prompt;
const Img = (
    <img src={Icon60} alt={Icon60} style={{height: '40px', width: '40px', background: 'gray', border: '2px solid #399af7', borderRadius: '50%'}} />
)
const HeadShowActionSheet = _ => {
    const BUTTONS = ['相册', '照片', '默认图库', '取消'];
    ActionSheet.showActionSheetWithOptions({
      options: BUTTONS,
      cancelButtonIndex: BUTTONS.length - 1,
    //   destructiveButtonIndex: BUTTONS.length - 2,
      title: '请选择',
      message: '选择你喜欢的图片来设置鞋垫的标识',
      maskClosable: true,
    //   'data-seed': 'logId',
    //   wrapProps,
    },
    // (buttonIndex) => {
    //   this.setState({ clicked: BUTTONS[buttonIndex] });
    // }
    );
}
const NamePromptAlert = () => {
    prompt('修改鞋垫昵称', '',
    [
        { text: '确认', onPress: () => console.log('ok'),  style: {color: '#399af7'}},
        { text: '取消', onPress: () => console.log('cancel'), style: {color: 'red'}},
    ], 'default', null, ['设备10091'])
}
const PhonePromptAlert = _ => {
    prompt('紧急联系人', '',
    [
        { text: '确认', onPress: () => console.log('ok'),  style: {color: '#399af7'}},
        { text: '取消', onPress: () => console.log('cancel'), style: {color: 'red'}},
    ], 'default', null, ['13800000000'])
}
const FixingDetails = props => (
    <div>
        <NavBar
        icon={<Icon type="left" size="lg"/>}
        leftContent="我的鞋垫"
        onLeftClick={_ => props.history.goBack()}
        style={{minHeight: '7vh'}}>设备10091</NavBar>
        <VipCover VipCover history={props.history} status="使用中" />
        <List renderHeader={() => '月卡剩余天时间'}>
            <Item 
                extra={ <Button type="ghost" inline size="small"  onClick={_ => props.history.push('/FixingsCenter/FixingDetails/VipCenter')}>续费 </Button>}
            >
                322天 
            </Item>
        </List>
        <List renderHeader={ <span style={{color: '#399af7', fontWeight: 'bold'}}>鞋垫详情：</span>}>
            <Item
                extra="20171000010091"
                arrow="horizontal"
                onClick={_ => props.history.push('/FixingsCenter/FixingDetails/FixingQRCode')}
            >
                鞋垫编码 
            </Item>
            <Item
                extra={Img}
                arrow="horizontal"
                onClick={HeadShowActionSheet}
            >
                鞋垫标识 
            </Item>
            <Item
                extra="设备10091"
                arrow="horizontal"
                onClick={NamePromptAlert}
            >
                鞋垫昵称
            </Item>
            <Item
                extra="13800000000"
                arrow="horizontal"
                onClick={PhonePromptAlert}
            >
                紧急联系人
            </Item>
        </List>
        <List renderHeader={ <span style={{color: '#399af7', fontWeight: 'bold'}}>鞋垫管理：</span>}>
            <Item
                extra="紧急模式"
                arrow="horizontal"
                onClick={_ => props.history.push('/FixingsCenter/FixingDetails/ModeCenter')}
            >
                定位跑路 
            </Item>
        </List>
        <WhiteSpace size="xs" />
        <Flex justify="center" style={{color: 'gray', fontSize: '12px'}}>绑定时间：1970年1月1日</Flex>
        <WhiteSpace size="xl" />
        <WingBlank size="lg">
            <Button type="primary" style={{borderRadius: '50px'}} onClick={UnBindShowAlert}>解除绑定</Button>
        </WingBlank>
        <WhiteSpace size="xl" />
    </div>
);
  
export default FixingDetails