import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './assets/css/style.css';
import './assets/css/style1.css';

ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();