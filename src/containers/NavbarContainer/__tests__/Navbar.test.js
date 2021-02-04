import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Router, MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import Navbar from '../comonents/Navbar';

it('has a logo(link) and a button', () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Navbar />
    </Router>
  );
  expect(screen.getAllByRole('img')).toHaveLength(1);
  expect(screen.getByText(/favorites/i)).toBeTruthy();
});

it('redirects to favorites on button click', () => {
  const history = createMemoryHistory();
  history.push = jest.fn();
  render(
    <Router history={history}>
      <Navbar />
    </Router>
  );

  fireEvent.click(screen.getByText(/favorites/i));

  expect(history.push).toHaveBeenCalledWith('/favorites');
});

it('redirects to search page on button click', () => {
  const history = createMemoryHistory();
  history.push = jest.fn();
  render(
    <Router history={history}>
      <Navbar />
    </Router>
  );
  fireEvent.click(screen.getByAltText('logo'));

  expect(history.push).toHaveBeenCalledWith('/');
});
