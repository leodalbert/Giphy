import { combineReducers } from 'redux';
import dashboard from './dashboard';
import favorites from './favorites';

export default combineReducers({ dashboard, favorites });
