import { all } from 'redux-saga/effects';

import { watchAuth } from '@app/core/auth/auth.middleware';
import { watchGetUser, watchGetUserDetail } from './pages/user/user.saga';

export default function* appMiddleware() {
  yield all([
    watchAuth(),
    watchGetUser(),
    watchGetUserDetail(),
  ]);
}
