import React from 'react'
import history from './history';
import { NavBar, Icon, Card, Flex, List, Button, WingBlank, WhiteSpace  } from 'antd-mobile';
import UnBindShowAlert from './UnBindShowAlert'
import iconGifLoad1 from '../assets/icon_gif_load1.png'
import Icon60 from '../assets/Icon-60@3x.png'
const Item = List.Item;
// const Brief = Item.Brief;

const Img = (
    <img src={Icon60} alt={Icon60} style={{height: '40px', width: '40px', background: 'gray', border: '2px solid #399af7', borderRadius: '50%'}} />
  )
const FixingDetails = () => (
    <div>
        <NavBar
        icon={<Icon type="left" size="lg"/>}
        leftContent="我的鞋垫"
        onLeftClick={_ => history.push('/FixingsCenter')}
        style={{minHeight: '7vh'}}>设备10091</NavBar>
        <WingBlank size="lg">
            <WhiteSpace size="lg" />
            <Card style={{background: '#399af7', padding: '0'}}>
                <Card.Body >
                    <Flex>
                        <Flex.Item>
                            <WhiteSpace size="xl" />
                            <img src={iconGifLoad1} style={{ width: '120px', height: '120px', transform: 'rotateY(180deg)' }} alt="iconGifLoad1"/>
                        </Flex.Item>
                        <Flex.Item style={{color: 'white', textAlign: 'right'}}>
                            <h2>使用中</h2>
                            <WhiteSpace size="xl" />
                            <WhiteSpace size="xl" />
                            <WhiteSpace size="xl" />
                            <p style={{fontSize: '21px'}}>阿布跑跑月卡</p>
                            <WhiteSpace size="md" />
                            <p style={{fontSize: '21px', fontWeight: 'bold'}}>ABOO</p>
                            <WhiteSpace size="md" />
                        </Flex.Item>
                    </Flex>
                </Card.Body>
            </Card>
            <WhiteSpace size="lg" />
        </WingBlank>
        <List renderHeader={() => '月卡剩余天时间'}>
            <Item 
                extra={ <Button type="ghost" inline size="small" >续费 </Button>}
            >
                322天 
            </Item>
        </List>
        <List renderHeader={ <span style={{color: '#399af7', fontWeight: 'bold'}}>鞋垫详情：</span>}>
            <Item
                extra="20171000010091"
                arrow="horizontal"
            >
                鞋垫编码 
            </Item>
            <Item
                extra={Img}
                arrow="horizontal"
            >
                鞋垫标识 
            </Item>
            <Item
                extra="设备10091"
                arrow="horizontal"
            >
                鞋垫昵称
            </Item>
            <Item
                extra="13800000000"
                arrow="horizontal"
            >
                紧急联系人
            </Item>
        </List>
        <List renderHeader={ <span style={{color: '#399af7', fontWeight: 'bold'}}>鞋垫管理：</span>}>
            <Item
                extra="紧急模式"
                arrow="horizontal"
            >
                定位跑路 
            </Item>
        </List>
        <WhiteSpace size="xs" />
        <Flex justify="center" style={{color: 'gray', fontSize: '12px'}}>绑定时间：1970年1月1日</Flex>
        <WhiteSpace size="xl" />
        <Flex justify="center" style={{color: 'gray', fontSize: '12px'}}>
            <Button type="primary" inline style={{padding: '0 38px'}} onClick={UnBindShowAlert}>解除绑定</Button>
        </Flex>
        <WhiteSpace size="xl" />
    </div>
);
  
export default FixingDetails