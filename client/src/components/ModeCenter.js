import React from 'react'
import history from './history';
import { NavBar, Icon, List, Checkbox, WhiteSpace, WingBlank } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;
const  data = [
    {
        title: '省电模式',
        sub: '低等频率自动给定位，定时1小时定位位置信息，待机与5-7天',
        active: 0
    },
    {
        title: '普通模式',
        sub: '中等频率自动给定位，定时5分钟定位位置信息，待机与3-4天',
        active: 0
    },
    {
        title: '普通模式',
        sub: '高等频率自动给定位，实时定位位置信息，待机与1-2天',
        active: 1
    }
]

const ModeCenter = () => (
    <div>
        <NavBar
            icon={<Icon type="left" size="lg" />}
            leftContent="返回"
            onLeftClick={_ => history.goBack()}
            style={{ minHeight: '7vh' }}>定位频率</NavBar>

       <List>
        {
            data.map((i, index)=> {
            const CheckBoxButton = (
                <Checkbox checked={i.active === 1}/>
            )
            return (<Item 
                key={index} 
                multipleLine
                extra={CheckBoxButton}
            >
                {i.title}<Brief>{i.sub}</Brief>
            </Item>)
            })
        }
      </List>
        <WhiteSpace size="md" />
        <WingBlank size="lg">
            <Brief style={{color: '#399af7'}}>温馨提示：此定位频率设置以绑定者最后一次修改为准</Brief>
        </WingBlank>
    </div>
)

export default ModeCenter