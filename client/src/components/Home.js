import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Drawer, NavBar, Icon } from 'antd-mobile';
import Sidebar from './Sidebar'
import Map from './Map'
import BottomCtrlbar from './BottomCtrlbar'
import my_fill_light from '../assets/my_fill_light.png'
import icon_message_white4 from '../assets/icon_message_white4@2x.png'
class Home extends Component {
    
    state = {
        leftOpen: false,
        bottomOpen: false
      }
    onDock = (d) => {
        // alert(d)
        this.setState({
          [d]: !this.state[d],
        });
      }
    render () {
        return (<div style={{height: '100vh'}}>
        <NavBar
           icon={this.state.bottomOpen ?  <Icon type="down" size="lg" /> : <img src={my_fill_light} style={{widht: '30px', height: '30px'}} alt="my_fill_light" />}
           onLeftClick={() => this.onDock(this.state.bottomOpen ? 'bottomOpen' :'leftOpen')}
           rightContent={<Link to="/MessageCenter"><img src={icon_message_white4} style={{widht: '26px', height: '26px'}} alt="icon_message_white4" /></Link>}
           style={{minHeight: '7vh'}}>阿布跑跑</NavBar>
         <Drawer
           className="left-drawer"
           style={{ minHeight: '93vh', zIndex: '99', top: '7vh'}}
           sidebar={Sidebar}
           open={this.state.leftOpen}
           onOpenChange={() => this.onDock('leftOpen')}
         >
           <Map onDock={() => this.onDock('bottomOpen')} bottomOpen={this.state.bottomOpen}/>
         </Drawer>
         <Drawer
           className="bottom-drawer"
           style={{ minHeight: '93vh', marginTop: '7vh', zIndex: this.state.bottomOpen ? '99999' : '1' }}
           sidebarStyle={{boxShadow: '0 0 rgba(0, 0, 0, 0)', height: '100%' }}
           position='bottom'
           sidebar={BottomCtrlbar}
           open={this.state.bottomOpen}
           onOpenChange={() => this.onDock('bottomOpen')}
         >
           <div />
         </Drawer> 
       </div>);
    }
}
export default Home