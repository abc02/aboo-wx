import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Home from './Home'
import MessageCenter from './MessageCenter'
import PersonalCenter from './PersonalCenter'
import FixingsCenter from './FxingsCenter'
import PublicBenefit from './PublicBenefit'

class App extends Component {
  render () {
    return (<Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/MessageCenter" component={MessageCenter} />
        <Route path="/PersonalCenter" component={PersonalCenter} />
        <Route path="/FixingsCenter" component={FixingsCenter} />
        <Route path="/PublicBenefit" component={PublicBenefit} />
      </div>
    </Router> )
  }
}

export default App;
