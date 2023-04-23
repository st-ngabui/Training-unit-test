import ACTION_TYPES from '@app/core/constants/types';

export const getListUser = () => {
  return {
    type: ACTION_TYPES.GET_LIST_USER,
  };
};

export const getListUserSuccess = (data) => {
  return {
    type: ACTION_TYPES.GET_LIST_USER_SUCCESS,
    payload: { data },
  };
};

export const getListUserError = (error) => {
  return {
    type: ACTION_TYPES.GET_LIST_USER_ERROR,
    payload: { error },
  };
};

export const getUserDetail = (id) => {
  return {
    type: ACTION_TYPES.GET_USER_DETAIL,
    payload: { id }
  };
};

export const getUserDetailSuccess = (data) => {
  return {
    type: ACTION_TYPES.GET_USER_DETAIL_SUCCESS,
    payload: { data },
  };
};

export const getUserDetailError = (error) => {
  return {
    type: ACTION_TYPES.GET_USER_DETAIL_ERROR,
    payload: { error },
  };
};

export const deleteUser = (id: string) => {
  return {
    type: ACTION_TYPES.DELETE_USER,
    payload: { id }
  };
};
