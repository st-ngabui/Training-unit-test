import React from 'react';
import { Routes, Route, MemoryRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';

import appMiddleware from '@app/app.middleware';
import appReducer from '@app/app.reducers';

const middleware = createSagaMiddleware();
const store = createStore(appReducer, applyMiddleware(middleware));

const Wrapper = ({ children }) => {
  middleware.run(appMiddleware);
  return(
    <Provider store={store}>
      <MemoryRouter>
        <Routes>
          <Route path="*" element={children} />
        </Routes>
      </MemoryRouter>
    </Provider>
  );
};

export default Wrapper;
