import { ApiService } from '@app/core/services/api.service';
import ACTION_TYPES from '@app/core/constants/types';
import { getListUserError, getListUserSuccess, getUserDetailError, getUserDetailSuccess } from './user.actions';
import { put, takeLatest } from 'redux-saga/effects';

const http = new ApiService();
// eslint-disable-next-line func-style
function* getListUser() {
  try {
    const res = yield http.get(['https://jsonplaceholder.typicode.com/users']);
    yield put(getListUserSuccess(res));
  } catch (error) {
    yield put(getListUserError(error));
  }
}

// eslint-disable-next-line func-style
function* getUserDetail({ payload }) {
  try {
    const res = yield http.get([`https://jsonplaceholder.typicode.com/users/${payload.id}`]);
    yield put(getUserDetailSuccess(res));
  } catch (error) {
    yield put(getUserDetailError(error));
  }
}

// eslint-disable-next-line func-style
export function* watchGetUser() {
  yield takeLatest(ACTION_TYPES.GET_LIST_USER, getListUser);
}

export function* watchGetUserDetail() {
  yield takeLatest(ACTION_TYPES.GET_USER_DETAIL, getUserDetail);
}
