import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
// import AppBackUp from './components/App.blackup';
// import App2 from './components/App2'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

