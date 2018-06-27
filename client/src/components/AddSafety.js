import React from 'react'
import { Map } from 'react-amap';
import ZoomCtrl from './ZoomCtrl'
import { List, Icon, SearchBar, Button, Slider, WingBlank } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;
const Top = props => {
    const map = props.__map__;
    if (!map) {
        console.log('组件必须作为 Map 的子组件使用');
        return;
    }
    const style = {
        position: 'absolute',
        top: '0',
        height: '7vh',
        width: '100vw',
        //   display: 'flex',
        //   alignItems: 'center'
    }
    const roundButtonStyle = {
        position: 'absolute',
        top: '0',
        left: '-45px',
        borderRadius: '50%',
        backgroundColor: 'white',
        padding: '3px',
        boxShadow: '0 1px 1px rgba(0, 0, 0, .2)',
    }
    return (<div
        style={style}>
        <div style={{ margin: '6px 20px 6px 50px', position: 'relative' }}>
            <Icon type='left' size="lg" style={roundButtonStyle} onClick={_ => props.history.goBack()} />
            <SearchBar placeholder="Search" maxLength={8} />
        </div>
    </div>)
}
const BottomBar = props => {
    const map = props.__map__;
    if (!map) {
        console.log('组件必须作为 Map 的子组件使用');
        return;
    }
    const style = {
        position: 'absolute',
        bottom: '1vh',
        left: '0',
        right: '0',
        height: '6vh',
        backgroundColor: 'white',
        zIndex: '999'
        //   display: 'flex',
        //   alignItems: 'center'
    }
    return (<WingBlank size="sm" style={style}>
    <Icon type="left" size="lg" style={{position: 'absolute',  top: '50%', left: '0', transform: 'translateY(-50%)'}}/>
    <WingBlank size="lg">
        <Slider
            style={{ margin: '3vh 50px'}}
            defaultValue={20}
            max={2000}
            />
    </WingBlank>
    <Icon type="right" size="lg" style={{position: 'absolute', top: '50%', right: '0', transform: 'translateY(-50%)'}} />
</WingBlank>)
}

const data = [
    {
        title: '当前位置',
        address: '浙江省温州市鹿城区双屿街道泰力路52号鹿城金融广场',
        distance: 87
    },
    {
        title: '鹿城区科技与文化融合示范基地',
        address: '双屿工业园昆仑路72号',
        distance: 25
    },
    {
        title: '中津先进科技研究院',
        address: '昆仑路72号b幢401室',
        distance: 25
    },
    {
        title: '鹿城金融广场',
        address: '泰力路48号',
        distance: 40
    },
    {
        title: '双屿派出所',
        address: '昆仑路70号',
        distance: 60
    },
    {
        title: '温州金融综合改革试验区',
        address: '泰力路46号附近',
        distance: 63
    },
    {
        title: '温州苏南漠北文化传播公司',
        address: '昆仑路72号a幢201',
        distance: 75
    },
    {
        title: '温州市吉安商会',
        address: '望江西路888号附近',
        distance: 87
    }
]
const Lists = props => {
    const style = {
        height: '44%',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        zIndex: '999',
        overflow: 'auto'
    }
    const ListItems = data.map(i => {
        const Distance = (<div style={{ fontSize: '.8rem', color: '#399af7' }}>{i.distance}米</div>)
        return <Item extra={Distance} key={i.title}>
            {i.title} <Brief>{i.address}</Brief>
        </Item>
    })
 
    return (<List renderHeader='Base' style={style}>
        {ListItems}
    </List>)
}

const BottomButton = props => {
    const style = {
        height: '6%',
        backgroundColor: 'white',
        zIndex: '999',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        borderTop: '1px solid #ddd'
    }
    return (<div style={style}>
            <Button style={{margin: '0 20px',borderRadius: '12px'}}type="primary" size="small">下一步</Button>
    </div>)
}
const AddSafety = props => (
    <div style={{height: '100%'}}>
        <div style={{height: '50%'}}>
            <Map amapkey="a1a4b0c0db52f71366ae4732e531748a">
                <Top history={props.history} />
                <ZoomCtrl />
                <BottomBar />
            </Map>
        </div>
        <Lists />
        <BottomButton />
    </div>
   
);


export default AddSafety