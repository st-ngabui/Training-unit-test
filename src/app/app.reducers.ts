import { combineReducers } from 'redux';

import authReducer from '@app/core/auth/auth.reducers';
import { userDetailReducer, usersReducer } from './pages/user/user.reducers';

const appReducer = combineReducers({
  authReducer,
  usersReducer,
  userDetailReducer
});

export default appReducer;
