import { combineReducers } from 'redux';
import restsReducer from './restsReducer';
import fieldsReducer from './fieldsReducer';

export default combineReducers({ 
  restaurants: restsReducer,
  fields: fieldsReducer
});