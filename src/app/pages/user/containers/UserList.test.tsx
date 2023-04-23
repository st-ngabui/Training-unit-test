import React from 'react';

import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

import UserList from './UserList';
import Wrapper from '@app/lib/utils/testing/Wrapper';

const arr = [
  {
  'id': 1,
  'name': 'Leanne Graham',
  'username': 'Bret',
  'email': 'Sincere@april.biz',
  'address': {
    'street': 'Kulas Light',
    'suite': 'Apt. 556',
    'city': 'Gwenborough',
    'zipcode': '92998-3874',
    'geo': {
      'lat': '-37.3159',
      'lng': '81.1496'
    }
  },
  'phone': '1-770-736-8031 x56442',
  'website': 'hildegard.org',
  'company': {
    'name': 'Romaguera-Crona',
    'catchPhrase': 'Multi-layered client-server neural-net',
    'bs': 'harness real-time e-markets'
  }
},
{
  'id': 5,
  'name': 'Chelsey Dietrich',
  'username': 'Kamren',
  'email': 'Lucio_Hettinger@annie.ca',
  'address': {
  'street': 'Skiles Walks',
  'suite': 'Suite 351',
  'city': 'Roscoeview',
  'zipcode': '33263',
  'geo': {
  'lat': '-31.8129',
  'lng': '62.5342'
  }
  },
  'phone': '(254)954-1289',
  'website': 'demarco.info',
  'company': {
  'name': 'Keebler LLC',
  'catchPhrase': 'User-centric fault-tolerant solution',
  'bs': 'revolutionize end-to-end systems'
  }
  },
];

const server = setupServer(
  rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
    // respond using a mocked JSON body
    return res(ctx.json(arr));
  }),
);

describe('test UserList component', () => {
  beforeAll(() => {
    server.listen();
  });
  
  afterAll(() => {
    server.close();
  });

  describe('test loading', () => {
    test('show loading screen', () => {
      render(<UserList/>, { wrapper: Wrapper });
      expect(screen.getByTestId('loading')).toBeInTheDocument();
      expect(screen.queryByTestId('list-user')).not.toBeInTheDocument();
    });
  });

  describe('user list is fetched and have data', () => {
    beforeEach(async () => {
      render(<UserList/>, { wrapper: Wrapper });
      await waitFor(() => expect(screen.queryByTestId('loading')).toBeNull);
    });
    test('show list user', async() => {
      expect(screen.getByTestId('list-user')).toBeInTheDocument();
      expect(screen.getAllByTestId('user')).toHaveLength(2);
      arr.forEach(item => {
        expect(screen.getByTestId(`user-${item.id}`)).toBeInTheDocument();
        expect(screen.getByTestId(`user-${item.id}`)).toHaveAttribute('href', `/users/${item.id}`);
      });
    });
    test('delete sucess', async() => {
      fireEvent.click(screen.getByTestId('button-1'));
      expect(screen.queryByTestId('user-1')).toBeNull();
      expect(screen.getAllByTestId('user')).toHaveLength(1);
    });
  });

  describe('list user is loaded and empty data', () => {
    test('show empty screen', async() => {
      server.use(
        rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
          // respond using a mocked JSON body
          return res(ctx.json([]));
        }),
      );
      render(<UserList/>, { wrapper: Wrapper });
      await waitFor(() => expect(screen.queryByTestId('loading')).toBeNull);
      expect(screen.getByTestId('empty')).toBeInTheDocument();
      expect(screen.queryByTestId('list-user')).not.toBeInTheDocument();
    });
  });

  describe('api list user return error', () => {
    test('show error screen', async() => {
      server.use(
        rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
          // respond using a mocked JSON body
          return res(ctx.status(500));
        }),
      );
      render(<UserList/>, { wrapper: Wrapper });
      await waitFor(() => expect(screen.queryByTestId('loading')).toBeNull);
      expect(screen.getByTestId('error')).toBeInTheDocument();
      expect(screen.queryByTestId('list-user')).not.toBeInTheDocument();
    });
  });
});
