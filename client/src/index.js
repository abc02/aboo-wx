import React from 'react';
import ReactDOM from 'react-dom';
import 'weui';
import 'react-weui/build/packages/react-weui.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

