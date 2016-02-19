import React from 'react';
import {Router, Route, IndexRoute } from 'react-router';

//components
import Base     from './components/base/base';
import Home     from './components/home/home';

export default (
  <Route path="/" component={Base}>
    <Route path="/home" component={Home} />
    <IndexRoute component={Home}/>
  </Route>
);
