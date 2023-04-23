import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import UserDetail from './UserDetail';
import Wrapper from '@app/lib/utils/testing/Wrapper';

const server = setupServer(
  rest.get('https://jsonplaceholder.typicode.com/users/:id', (req, res, ctx) => {
    const { id } = req.params;
    return res(
      ctx.json({
        id: id,
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
      })
    );
  })
);

describe('test UserDetail component', () => {
  beforeAll(() => {
    server.listen();
  });
  
  afterAll(() => {
    server.close();
  });

  describe('test loading', () => {
    test('show loading screen', () => {
      render(<UserDetail/>, { wrapper: Wrapper });
      expect(screen.getByTestId('loading')).toBeInTheDocument();
      expect(screen.queryByTestId('user')).not.toBeInTheDocument();
    });
  });

  describe('test get user detail success', () => {
    test('show user info', async() => {
      render(<UserDetail/>, { wrapper: Wrapper });
      await waitFor(() => screen.getByTestId('user'));
      expect(screen.getByTestId('user')).toBeInTheDocument();
    });
  });

  describe('user detail return error', () => {
    test('show error screen', async() => {
      server.use(
        rest.get('https://jsonplaceholder.typicode.com/users/:id', (req, res, ctx) => {
          return res(
            ctx.status(500),
          );
        })
      );
      render(<UserDetail/>, { wrapper: Wrapper });
      await waitFor(() => expect(screen.queryByTestId('loading')).toBeNull);
      expect(screen.getByTestId('error')).toBeInTheDocument();
      expect(screen.queryByTestId('user')).not.toBeInTheDocument();
    });
  });

});
