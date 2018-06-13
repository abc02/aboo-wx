import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom'
import history from './history';
import './App.css';
import Home from './Home'
import MessageCenter from './MessageCenter'
import PersonalCenter from './PersonalCenter'
import FixingsCenter from './FxingsCenter'
import FixingDetails from './FixingDetails'
import BBSCenter from './BBSCenter'
import PublicBenefit from './PublicBenefit'
import SetCenter from './SetCenter'


class App extends Component {
  render () {
    return (<Router history={history}>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/MessageCenter" component={MessageCenter} />
        <Route path="/PersonalCenter" component={PersonalCenter} />
        <Route exact path="/FixingsCenter" component={FixingsCenter} />
        <Route path="/FixingsCenter/FixingDetails" component={FixingDetails} />
        <Route path="/BBSCenter" component={BBSCenter} />
        <Route path="/PublicBenefit" component={PublicBenefit} />
        <Route path="/SetCenter" component={SetCenter} />

      </div>
    </Router> )
  }
}

export default App;
