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
    render(<Dashboard {...defaultProps} />);
    expect(screen.queryByRole('textbox')).toBeTruthy();
    expect(screen.queryByRole('progressbar')).toBeFalsy();
  });

  it('should display a progress bar when loading', () => {
    render(<Dashboard {...defaultProps} loading={true} />);
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
