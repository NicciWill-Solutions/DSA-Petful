import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dashboard from './Dashboard';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
<Provider store={store}>
<Dashboard />
</Provider>, 
document.getElementById('root'));
registerServiceWorker();
