import React from 'react';

import { PageRoute } from '@core/modules/custom-router-dom/router.interface';

const Users = React.lazy(() => import('./containers/Users'));
const UserList = React.lazy(() => import('./containers/UserList'));
const UserDetail = React.lazy(() => import('./containers/UserDetail'));

const userRoutes: PageRoute[] = [
  {
    path: 'users',
    element: Users,
    children: [
      {
        path: '',
        element: UserList
      },
      {
        path: ':id',
        element: UserDetail
      }
    ]
  }
];

export default userRoutes;