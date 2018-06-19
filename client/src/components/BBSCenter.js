import React from 'react'
import history from './history';
import { NavBar, Icon, Tabs, Card, List, WhiteSpace  } from 'antd-mobile';
import Icon60 from '../assets/Icon-60@3x.png'

const Item = List.Item;
const Brief = Item.Brief;

const tabs2 = [
{ title: '热门', sub: '1' },
{ title: '板块', sub: '2' },
];
const data1 = [
    {
        img: Icon60,
        tag: '转载',
        author: '樱桃',
        title: '有神奇魔力的9句话',
        content: '示例示例示例示例示例示例示例示例示例示例示例示例示例示例示例示例示例'
    },
    {
        img: Icon60,
        tag: '分享',
        author: 'king',
        title: '比起打骂，孩子更害怕这些伤害',
        content: '示例示例示例示例示例示例示例示例示例示例示例示例示例示例示例示例示例'
    },
    {
        img: Icon60,
        tag: '转载',
        author: 'king',
        title: '小儿咳嗽怎么办',
        content: '示例示例示例示例示例示例示例示例示例示例示例示例示例示例示例示例示例'
    },
    {
        img: Icon60,
        tag: '讨论',
        author: 'king',
        title: '孩子上学“绑架”家长，你怎么看？',
        content: '示例示例示例示例示例示例示例示例示例示例示例示例示例示例示例示例示例'
    }
]
const data2 = [
    {
        title: '微专题',
        today: 230,
        attention: 1007
    },
    {
        title: '活动',
        today: 10,
        attention: 580
    },
    {
        title: '百科知识',
        today: 200,
        attention: 2120
    },
    {
        title: '帮列表',
        today: 180,
        attention: 1890
    },
    {
        title: '能不能吃',
        today: 30,
        attention: 683
    },
    {
        title: '食谱',
        today: 66,
        attention: 667
    },
    {
        title: '图说',
        today: 6,
        attention: 61
    },
    {
        title: '小常识',
        today: 20,
        attention: 277
    },
    {
        title: '专家访谈',
        today: 25,
        attention: 308
    }
]
const Hot = (props) => (<List renderHeader={() => '热帖'} >
{
    data1.map((i, index) => {
        const Author = (
            <span style={{ color: 'gray', fontSize: '14px', marginLeft: '6px'}}>{i.author}</span>
        )
        const Img = (
            <img src={i.img} alt="author" style={{height: '28px', width: '28px',  borderRadius: '50%'}} />
        )
        const Tag = (
            <span style={{padding: '3px', color: 'gray', border: '1px solid gray', borderRadius: '6px', fontSize: '12px'}}>{i.tag}</span>
        )
        return (<Card full key={index}>
            <Card.Header
                title={Author}
                thumb={Img}
                extra={Tag}
            />
            <Card.Body>
                <h4>{i.title}</h4>
                <WhiteSpace size="lg"/>
                <p>{i.content}</p>
            </Card.Body>
            {/* <Card.Footer content="footer content" extra={<div>extra footer content</div>} /> */}
        </Card>)
    })
}
</List>)
const Plate = (props) => (<List renderHeader={() => '全部板块(9)'}>
    {
        data2.map((i, index) => {
            const Today = (props) => (
                <span style={{ padding: '3px 4px' ,color: 'gray', background: '#f3f3f3', fontSize: '12px', marginLeft: '6px'}}>今日 {props.today}</span>
            )
            const Img = (
                <img src="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png" alt="author" style={{height: '40px', width: '40px',}} />
            )
            const Tag = (
                <span style={{padding: '3px 6px', color: '#399af7', border: '1px solid #399af7', borderRadius: '6px', fontSize: '12px'}}>关注</span>
            )
            return (<Item key={index}
                thumb={Img}
                extra={Tag}
            >
             {i.title} <Today today={i.today}/> <Brief>关注 {i.attention}</Brief>
            </Item>)
        })
    }
</List>)
const BBSCenter = () => (
    <div>
        <NavBar
    rightContent={<Icon type="cross" size="lg" color="white" onClick={_ => history.goBack()}/>}
    style={{minHeight: '7vh'}}>宝宝论坛</NavBar>
     <Tabs tabs={tabs2}
        initialPage={0}
        renderTab={tab => <span>{tab.title}</span>}
      >
        <Hot />
        <Plate />
      </Tabs>
    </div>
);
  
  
export default BBSCenter