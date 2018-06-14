import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom'
import history from './history';
import './App.css';
import Home from './Home'
import MessageCenter from './MessageCenter'
import PersonalCenter from './PersonalCenter'
import FixingsCenter from './FxingsCenter'
import FixingDetails from './FixingDetails'
import VipCenter from './VipCenter'
import FixingQRCode from './FixingQRCode'
import ModeCenter from './ModeCenter'
import BBSCenter from './BBSCenter'
import PublicBenefit from './PublicBenefit'
import SetCenter from './SetCenter'

class App extends Component {
  render () {
    return (<Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/MessageCenter" component={MessageCenter} />
        <Route exact path="/PersonalCenter" component={PersonalCenter} />
        <Route exact path="/FixingsCenter" component={FixingsCenter} />
        <Route exact path="/FixingsCenter/FixingDetails" component={FixingDetails} />
        <Route exact path="/FixingsCenter/FixingDetails/VipCenter" component={VipCenter} />
        <Route exact path="/FixingsCenter/FixingDetails/FixingQRCode" component={FixingQRCode} />
        <Route exact path="/FixingsCenter/FixingDetails/ModeCenter" component={ModeCenter} />
        <Route exact path="/BBSCenter" component={BBSCenter} />
        <Route exact path="/PublicBenefit" component={PublicBenefit} />
        <Route exact path="/SetCenter" component={SetCenter} />
      </Switch>
    </Router> )
  }
}

export default App;
