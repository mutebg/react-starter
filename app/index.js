import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import Routes from './routes';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware( promise )( createStore );

var routes = (
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>{Routes}</Router>
    </Provider>
);

window.onload = () => {
  ReactDOM.render(routes, document.getElementById('app'));
};
