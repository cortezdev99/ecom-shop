import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'

import HeaderNavbar from './headerNavbarReducer'

const rootReducer = combineReducers({
  form,
  HeaderNavbar
});

export default rootReducer;