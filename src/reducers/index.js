import { combineReducers } from 'redux';
import dashboard from './dashboard';
import favorites from './favorites';
import alerts from './alerts';

export default combineReducers({ dashboard, favorites, alerts });
