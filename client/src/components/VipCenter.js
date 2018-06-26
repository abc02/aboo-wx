import React from 'react'
import { NavBar, Icon, Flex, List, Button, WingBlank, WhiteSpace  } from 'antd-mobile';
import VipCover from './VipCover'
import VipButton from './VipButton'
// import Icon60 from '../assets/Icon-60@3x.png'
// const Item = List.Item;
// const Brief = Item.Brief;

const data = [
    '此月卡用于鞋垫定位时支付的运营商数据传输费用。',
    '每双鞋垫第一次激活时免费提供30天为体验期。',
    '若月卡过期，购买后月卡立即生效；若月卡未过期，续费后过期时间顺延（1个月按照30天计算）。',
    '购买或续费月卡成功后，相应费用不予退还。',
    '月卡过期后，鞋垫将无法进行定位，历史定位位置继续保留。重新购买/续费后，定位功能立即恢复。',
    '本权益有阿布跑跑提供，用户需遵守服务规则和用户协议，有任何疑问请联系阿布跑跑。'
]
const VipCenter =  props => {
    return (<div>
        <NavBar
        icon={<Icon type="left" size="lg"/>}
        leftContent="返回"
        onLeftClick={_ => props.history.goBack()}
        style={{minHeight: '7vh'}}>设备10091月卡续费</NavBar>
        <VipCover history={props.history} status="月卡剩余322天" />
        <List>
            <WhiteSpace size="lg" />
            <WingBlank size="lg">
            <span style={{color: '#399af7', fontWeight: 'bold'}}> 续费设备ID：20171000010091</span>
            <WhiteSpace size="lg" />
                <Flex>
                    <Flex.Item>
                      <VipButton month={1} />
                    </Flex.Item>
                    <Flex.Item>
                    <VipButton month={3} />
                    </Flex.Item>
                </Flex>
                <WhiteSpace size="xl" />
                <Flex>
                    <Flex.Item>
                        <VipButton month={6} />
                    </Flex.Item>
                    <Flex.Item>
                        <VipButton month={12} discount={8}/>
                    </Flex.Item>
                </Flex>
            <WhiteSpace size="xl" />
                <WingBlank size="lg">
                <ul style={{color: 'gray', fontSize: '14px', letterSpacing: '1px'}}>
                {
                    data.map((i, index) => (
                        <li key={index}>
                            {i}
                        </li>
                    ))
                }
                </ul>
                </WingBlank>
            </WingBlank>
            <WhiteSpace size="xl" />
        </List>
        <WhiteSpace size="xl" />
        <WingBlank size="lg">
            <Button type="primary" disabled style={{borderRadius: '50px'}}>续费</Button>
        </WingBlank>
    </div>)
}

export default VipCenter