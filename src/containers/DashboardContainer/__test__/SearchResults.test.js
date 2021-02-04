import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();
const store = mockStore({});

import SearchResults from '../components/SearchResults';
import { gifs } from './fixtures';

it('should display one card for each item in input array', () => {
  render(
    <Provider store={store}>
      <SearchResults gifs={gifs} />
    </Provider>
  );
  expect(screen.queryAllByRole('img')).toHaveLength(3);
});
