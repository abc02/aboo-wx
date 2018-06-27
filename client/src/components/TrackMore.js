import React from 'react'
import { NavBar, List, Icon } from 'antd-mobile';
import icon_gps from '../assets/icon_gps.png'
import icon_lbs from '../assets/icon_lbs.png'
import icon_Wifi from '../assets/icon_Wifi.png'
const Item = List.Item;
// const Brief = Item.Brief;
const data = {
    "code": "获取成功",
    "data": [
        {
            "loc_time": 1530036035,
            "latitude": 28.05461931688234,
            "longitude": 120.81201285185888,
            "create_time": "2018-06-27 02:00:35",
            "direction": 0,
            "height": 0,
            "key1": "",
            "radius": 550,
            "speed": 0,
            "address": "浙江省温州市永嘉县乌仁线[泰庄村北128米]",
            "mode": "LBS"
        },
        {
            "loc_time": 1530036065,
            "latitude": 28.051050574002097,
            "longitude": 120.81850185334878,
            "create_time": "2018-06-27 02:01:05",
            "direction": 0,
            "height": 0,
            "key1": "",
            "radius": 30,
            "speed": 0,
            "address": "浙江省温州市乐清市沙洪路[洪渡桥村东59米]",
            "mode": "WIFI"
        },
        {
            "loc_time": 1530036169,
            "latitude": 28.051061763836838,
            "longitude": 120.81849079897349,
            "create_time": "2018-06-27 02:02:49",
            "direction": 0,
            "height": 0,
            "key1": "",
            "radius": 30,
            "speed": 0,
            "address": "浙江省温州市乐清市沙洪路[洪渡桥村东58米]",
            "mode": "WIFI"
        },
        {
            "loc_time": 1530036277,
            "latitude": 28.051061763836838,
            "longitude": 120.81849079897349,
            "create_time": "2018-06-27 02:04:37",
            "direction": 0,
            "height": 0,
            "key1": "",
            "radius": 30,
            "speed": 0,
            "address": "浙江省温州市乐清市沙洪路[洪渡桥村东58米]",
            "mode": "WIFI"
        },
        {
            "loc_time": 1530039675,
            "latitude": 28.051061763836838,
            "longitude": 120.81849079897349,
            "create_time": "2018-06-27 03:01:15",
            "direction": 0,
            "height": 0,
            "key1": "",
            "radius": 30,
            "speed": 0,
            "address": "浙江省温州市乐清市沙洪路[洪渡桥村东58米]",
            "mode": "WIFI"
        },
        {
            "loc_time": 1530052383,
            "latitude": 28.051061014838567,
            "longitude": 120.81849348735591,
            "create_time": "2018-06-27 06:33:03",
            "direction": 0,
            "height": 0,
            "key1": "",
            "radius": 30,
            "speed": 0,
            "address": "浙江省温州市乐清市沙洪路[洪渡桥村东59米]",
            "mode": "WIFI"
        },
        {
            "loc_time": 1530052503,
            "latitude": 28.051050089129006,
            "longitude": 120.81850264997614,
            "create_time": "2018-06-27 06:35:03",
            "direction": 0,
            "height": 0,
            "key1": "",
            "radius": 30,
            "speed": 0,
            "address": "浙江省温州市乐清市沙洪路[洪渡桥村东59米]",
            "mode": "WIFI"
        },
        {
            "loc_time": 1530052611,
            "latitude": 28.051050089129006,
            "longitude": 120.81850264997614,
            "create_time": "2018-06-27 06:36:51",
            "direction": 0,
            "height": 0,
            "key1": "",
            "radius": 30,
            "speed": 0,
            "address": "浙江省温州市乐清市沙洪路[洪渡桥村东59米]",
            "mode": "WIFI"
        },
        {
            "loc_time": 1530055464,
            "latitude": 28.051002446735637,
            "longitude": 120.81857942531694,
            "create_time": "2018-06-27 07:24:24",
            "direction": 0,
            "height": 0,
            "key1": "",
            "radius": 30,
            "speed": 0,
            "address": "浙江省温州市乐清市沙洪路[乐清市九鼎门业有限公司北52米]",
            "mode": "WIFI"
        },
        {
            "loc_time": 1530055584,
            "latitude": 28.051090818725687,
            "longitude": 120.81850433184881,
            "create_time": "2018-06-27 07:26:24",
            "direction": 0,
            "height": 0,
            "key1": "",
            "radius": 30,
            "speed": 0,
            "address": "浙江省温州市乐清市沙洪路[洪渡桥村东61米]",
            "mode": "WIFI"
        },
        {
            "loc_time": 1530055705,
            "latitude": 28.050676667435873,
            "longitude": 120.81847925521883,
            "create_time": "2018-06-27 07:28:25",
            "direction": 0,
            "height": 0,
            "key1": "",
            "radius": 58,
            "speed": 0,
            "address": "浙江省温州市乐清市沙洪路[乐清市九鼎门业有限公司附近16米]",
            "mode": "WIFI"
        },
        {
            "loc_time": 1530055758,
            "latitude": 28.04896262741492,
            "longitude": 120.81595435390277,
            "create_time": "2018-06-27 07:29:18",
            "direction": 0,
            "height": 0,
            "key1": "",
            "radius": 100,
            "speed": 0,
            "address": "浙江省温州市乐清市[乐清市永乐农场东南177米]",
            "mode": "WIFI"
        },
        {
            "loc_time": 1530056058,
            "latitude": 28.034977017596642,
            "longitude": 120.81602771543238,
            "create_time": "2018-06-27 07:34:18",
            "direction": 0,
            "height": 0,
            "key1": "",
            "radius": 30,
            "speed": 0,
            "address": "浙江省温州市乐清市S10(高岙大桥)[浙江夏商电气有限公司南105米]",
            "mode": "WIFI"
        },
        {
            "loc_time": 1530056358,
            "latitude": 28.026766438916486,
            "longitude": 120.81446117127813,
            "create_time": "2018-06-27 07:39:18",
            "direction": 0,
            "height": 0,
            "key1": "",
            "radius": 61,
            "speed": 0,
            "address": "浙江省温州市乐清市G104(京福线)[浙江诚通电力科技有限公司附近34米]",
            "mode": "WIFI"
        },
        {
            "loc_time": 1530056658,
            "latitude": 28.024938328415786,
            "longitude": 120.80898181702719,
            "create_time": "2018-06-27 07:44:18",
            "direction": 0,
            "height": 0,
            "key1": "",
            "radius": 100,
            "speed": 0,
            "address": "浙江省温州市乐清市G104(京福线)[浙江正泰电器股份有限公司-西北门西145米]",
            "mode": "WIFI"
        },
        {
            "loc_time": 1530056957,
            "latitude": 28.024690618504753,
            "longitude": 120.80805857905202,
            "create_time": "2018-06-27 07:49:17",
            "direction": 0,
            "height": 0,
            "key1": "",
            "radius": 100,
            "speed": 0,
            "address": "浙江省温州市乐清市G104(京福线)[乐清市公安局白象治安检查服务站东60米]",
            "mode": "WIFI"
        },
        {
            "loc_time": 1530056997,
            "latitude": 28.024690618504753,
            "longitude": 120.80805857905202,
            "create_time": "2018-06-27 07:49:57",
            "direction": 0,
            "height": 0,
            "key1": "",
            "radius": 100,
            "speed": 0,
            "address": "浙江省温州市乐清市G104(京福线)[乐清市公安局白象治安检查服务站东60米]",
            "mode": "WIFI"
        },
        {
            "loc_time": 1530057481,
            "latitude": 28.024690618504753,
            "longitude": 120.80805857905202,
            "create_time": "2018-06-27 07:58:01",
            "direction": 0,
            "height": 0,
            "key1": "",
            "radius": 100,
            "speed": 0,
            "address": "浙江省温州市乐清市G104(京福线)[乐清市公安局白象治安检查服务站东60米]",
            "mode": "WIFI"
        },
        {
            "loc_time": 1530077251,
            "latitude": 28.029208290525254,
            "longitude": 120.61792024017193,
            "create_time": "2018-06-27 13:27:31",
            "direction": 0,
            "height": 0,
            "key1": "",
            "radius": 550,
            "speed": 0,
            "address": "浙江省温州市鹿城区泰力路35号[鹿城金融广场内,温州美特斯邦威办公宿舍楼西61米]",
            "mode": "LBS"
        },
        {
            "loc_time": 1530077311,
            "latitude": 28.029130432367747,
            "longitude": 120.61791811344611,
            "create_time": "2018-06-27 13:28:31",
            "direction": 0,
            "height": 0,
            "key1": "",
            "radius": 550,
            "speed": 0,
            "address": "浙江省温州市鹿城区泰力路36号[鹿城金融广场内,温州美特斯邦威办公宿舍楼西63米]",
            "mode": "LBS"
        },
        {
            "loc_time": 1530077357,
            "latitude": 28.028970758072774,
            "longitude": 120.61865615151021,
            "create_time": "2018-06-27 13:29:17",
            "direction": 0,
            "height": 0,
            "key1": "",
            "radius": 30,
            "speed": 0,
            "address": "浙江省温州市鹿城区昆仑路72号[鹿城金融广场内,温州美特斯邦威办公宿舍楼附近45米]",
            "mode": "WIFI"
        },
        {
            "loc_time": 1530078578,
            "latitude": 28.029019496754202,
            "longitude": 120.61873119876118,
            "create_time": "2018-06-27 13:49:38",
            "direction": 0,
            "height": 0,
            "key1": "",
            "radius": 32,
            "speed": 0,
            "address": "浙江省温州市鹿城区昆仑路72号[鹿城金融广场内,温州美特斯邦威办公宿舍楼附近45米]",
            "mode": "WIFI"
        }
    ],
    "ret": 1001
}
let items = data.data.map(i => {

    const Modes = props => {
        let srcImg
        if (props.mode === 'WIFI') srcImg = icon_Wifi
        if (props.mode === 'LBS') srcImg = icon_lbs
        if (props.mode === 'GPS') srcImg = icon_gps
        return <img src={srcImg} style={{ ...props.style,width: '20px', height: '20px'}} alt={props.mode} />
    }
    return(<Item
        thumb={<Modes mode={i.mode} />}
        extra={i.create_time}
        wrap
        multipleLine
        onClick={() => { }}
    >
        {i.address}
    </Item>)
})
const TrackMore = props => (
    <div >
        <NavBar
            icon={<Icon type="left" size="lg" />}
            leftContent="返回"
            onLeftClick={_ => props.history.goBack()}
            style={{ minHeight: '7vh' }}>所有轨迹</NavBar>
        <List style={{height: '93vh'}}>
            {items}
        </List>
    </div>

);


export default TrackMore