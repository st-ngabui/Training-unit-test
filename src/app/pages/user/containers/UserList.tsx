import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser, getListUser } from '../user.actions';

const UserList = (): JSX.Element => {
  const { data: listUser, isLoading, hasError } = useSelector((state: any) => state.usersReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListUser());
  }, []);

  const deleteUserItem = (id: string) => {
    dispatch(deleteUser(id));
  };

  if (isLoading) {
    return <p data-testid="loading">Loading ...</p>;
  }
  if (hasError) {
    return <p data-testid="error">ERROR</p>;
  }

  return (
    <>
      <div data-testid="title">List Users</div>
      {listUser?.length ? (
          <ul data-testid="list-user">
            {listUser.map((user) => (
              <li key={user.id} data-testid="user">
                <Link to={`/users/${user.id}`} data-testid={`user-${user.id}`}>
                  <p>Id: {user.id}</p>
                  <p>Email: {user.email}</p>
                </Link>
                <button data-testid={`button-${user.id}`} onClick={() => deleteUserItem(user.id)}>Delete</button>
              </li>
            ))}
          </ul>
        ) : <p data-testid="empty">EMPTY</p>}
    </>
  );
};

export default UserList;
