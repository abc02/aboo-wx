import React from 'react'
import { Card, Flex, WingBlank, WhiteSpace  } from 'antd-mobile';
import iconGifLoad1 from '../assets/icon_gif_load1.png'
const VipCover = props => (<WingBlank size="lg">
    <WhiteSpace size="lg" />
    <Card style={{background: '#399af7', padding: '0'}} onClick={_ => props.history.push('/FixingsCenter/FixingDetails/VipCenter')}>
        <Card.Body >
            <Flex>
                <Flex.Item>
                    <WhiteSpace size="xl" />
                    <img src={iconGifLoad1} style={{ width: '120px', height: '120px', transform: 'rotateY(180deg)' }} alt="iconGifLoad1"/>
                </Flex.Item>
                <Flex.Item style={{color: 'white', textAlign: 'right'}}>
                    <h2>{props.status}</h2>
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
</WingBlank>)

export default VipCover