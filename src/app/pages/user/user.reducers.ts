import { createReducer } from '@app/core/helpers/reducer-factory';
import ACTION_TYPES from '@app/core/constants/types';

const initialState = {
  isLoading: false,
  hasError: false,
  data: null,
  error: null,
};

const getListUser = (state) => ({
  ...state,
  isLoading: true,
  hasError: false,
  error: null
});

const getListUserSuccess = (state, payload) => ({
  ...state,
  isLoading: false,
  data: payload.data
});

const getListUserError = (state, payload) => ({
  ...state,
  isLoading: false,
  hasError: true,
  error: payload.error,
});

const getUserDetail = (state) => ({
	...state,
	isLoading: true,
	hasError: false,
	error: null
});

const getUserDetailSuccess = (state, payload) => ({
	...state,
	isLoading: false,
  hasError: false,
	data: payload.data,
  error: null
});
  
const getUserDetailError = (state, payload) => ({
	...state,
	isLoading: false,
	hasError: true,
	error: payload.error,
  data: null
});

const deleteUser = (state, payload) => ({
	...state,
	data: [...state.data.filter(item => item.id !== payload.id)],
	isLoading: false,
	hasError: false,
	error: payload.error,
});

const strategiesUsers = {
	[ACTION_TYPES.GET_LIST_USER]: getListUser,
	[ACTION_TYPES.GET_LIST_USER_SUCCESS]: getListUserSuccess,
	[ACTION_TYPES.GET_LIST_USER_ERROR]: getListUserError,
	[ACTION_TYPES.DELETE_USER]: deleteUser,
  __default__: state => state
};

const strategiesUserDetail = {
  [ACTION_TYPES.GET_USER_DETAIL]: getUserDetail,
  [ACTION_TYPES.GET_USER_DETAIL_SUCCESS]: getUserDetailSuccess,
  [ACTION_TYPES.GET_USER_DETAIL_ERROR]: getUserDetailError,
  __default__: state => state
};
export const usersReducer = createReducer(strategiesUsers, initialState);
export const userDetailReducer = createReducer(strategiesUserDetail, initialState);
