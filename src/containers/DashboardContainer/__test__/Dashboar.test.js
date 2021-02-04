import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();
const store = mockStore({});

import Dashboard from '../components/Dashboard';
import { gifs } from './fixtures';

describe('The Dashboard Component', () => {
  const defaultProps = {
    searchGifs: jest.fn(),
    searchResults: [],
    loading: false,
  };

  it('should display a search box and no progressbar', () => {
    render(
      <Provider store={store}>
        <Dashboard {...defaultProps} />
      </Provider>
    );
    expect(screen.queryByRole('textbox')).toBeTruthy();
    expect(screen.queryByRole('progressbar')).toBeFalsy();
  });

  it('should display a progress bar when loading', () => {
    render(
      <Provider store={store}>
        <Dashboard {...defaultProps} loading={true} />
      </Provider>
    );
    expect(screen.queryByRole('progressbar')).toBeTruthy();
  });

  it('Should display cards when there are search results', () => {
    render(
      <Provider store={store}>
        <Dashboard {...defaultProps} searchResults={gifs} />
      </Provider>
    );
    expect(screen.queryAllByRole('img')).toHaveLength(3);
  });
});
