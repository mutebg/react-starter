import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import Routes from './routes';
import Store from './store';

const onUpdate = () => window.scrollTo(0, 0);
const routes = (
    <Provider store={Store}>
        <Router history={browserHistory} onUpdate={onUpdate}>{Routes}</Router>
    </Provider>
);

window.onload = () => {
  ReactDOM.render(routes, document.getElementById('app'));
};
