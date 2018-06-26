import React from 'react';
import { Map } from 'react-amap';
import LeftTopCtrl from './LeftTopCtrl'
import ZoomCtrl from './ZoomCtrl'
import LayerCtrl from './LayerCtrl'
import BottomCtrl from './BottomCtrl'
const AppMap = props => (
  <Map amapkey="a1a4b0c0db52f71366ae4732e531748a" style={{minHeight: '93vh'}}> 
    <LeftTopCtrl />
    <ZoomCtrl />
    <LayerCtrl />
    <BottomCtrl onDock={() => props.onDock('bottomOpen')} bottomOpen={props.bottomOpen}/>
  </Map>
);

export default AppMap;
