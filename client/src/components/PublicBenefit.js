import React from 'react'
import { Link } from 'react-router-dom'
import { NavBar, Icon, Card, WingBlank, WhiteSpace  } from 'antd-mobile';
import commonweal from '../assets/commonweal@2x.png'
const data = [
    {
        img: commonweal,
        title: '云南省昆明市7岁男孩走失',
        content: '2018年6月9日示例示例示例示例示例示例示例示例示例示例示例示例示例示例示例示例示例示例'
    },
    {
        img: commonweal,
        title: '福建省莆田市13岁女孩走失',
        content: '2018年6月9日示例示例示例示例示例示例示例示例示例示例示例示例示例示例示例示例示例'
    },
    {
        img: commonweal,
        title: '湖北省武汉市13岁女孩走失',
        content: '2018年6月9日示例示例示例示例示例示例示例示例示例示例示例示例示例示例示例示例示例示例示例示例示例示例示例示例示例示例示例示例示例示例'
    }
]
const Lists = (props) => {
    return (<div>
        {data.map((i, index) => {
            return (<WingBlank size="md" key={index}>
            <WhiteSpace size="md" />
                <Card>
                <Card.Body style={{padding: '0'}}>
                    <img src={i.img} style={{width: '100%', height: '120px'}} alt="commonweal" />
                    <WingBlank size="md">
                        <WhiteSpace size="md" />
                        <h4>{i.title}</h4>
                        <WhiteSpace size="md" />
                        <p>{i.content}</p>
                        <WhiteSpace size="lg" />
                    </WingBlank>
                </Card.Body>
                <Card.Footer content="查看详情" />
                </Card>
            <WhiteSpace size="md" />
        </WingBlank>)
        })}
      </div>)
}
const FixingsCenter = () => (
    <div>
        <NavBar
        rightContent={<Link to="/"><Icon type="cross" size="lg" color="white"/></Link>}
        style={{minHeight: '7vh'}}>公益栏</NavBar>
        <Lists />
    </div>
);
  
export default FixingsCenter