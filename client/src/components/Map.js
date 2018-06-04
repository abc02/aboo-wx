import React, { Component } from 'react';
import { Map } from 'react-amap';
class App extends Component {
  constructor(){
    super();
    // this.mapPlugins = ['ToolBar'];
    // this.mapCenter = {longitude: 120, latitude: 35};
  }

  render() {
    return (<Map 
      amapkey="a1a4b0c0db52f71366ae4732e531748a"
      // plugins={this.mapPlugins}
      // center={this.mapCenter}
      >
    </Map>)
  }
}

export default App;
