import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Home from './Home'
import MessageCenter from './MessageCenter'

class App extends Component {
  render () {
    return (<Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/MessageCenter" component={MessageCenter} />
      </div>
    </Router> )
  }
}

export default App;
