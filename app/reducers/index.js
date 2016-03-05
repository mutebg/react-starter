import { combineReducers } from 'redux';
import items from './items';

const root = combineReducers({
  items,
});

export default root;
