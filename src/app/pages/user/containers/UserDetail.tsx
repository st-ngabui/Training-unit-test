import { getUserDetail } from '@app/pages/user/user.actions';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

const UserDetail = (): JSX.Element => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data: user, isLoading, hasError } = useSelector((state: any) => state.userDetailReducer);
  useEffect(() => {
    dispatch(getUserDetail(id));
  }, []);

  if (isLoading) {
    return <p data-testid="loading">Loading ...</p>;
  }
  if (hasError) {
    return <p data-testid="error">ERROR</p>;
  }

  return (
    <div>
      <h4>Product detail</h4>
      {user && <div data-testid="user">
        <p>Id: {user.id}</p>
        <p>Email: {user.email}</p>
        <p>Name: {user.name}</p>
        <p>Username: {user.username}</p>
        <p>Phone: {user.phone}</p>
      </div>}
    </div>
  );
};

export default UserDetail;
