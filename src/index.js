import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import CMS from 'netlify-cms'


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
