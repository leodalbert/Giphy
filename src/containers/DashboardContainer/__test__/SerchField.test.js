import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import SearchField from '../components/SearchField';

describe('A search box with a button that triggers a searchGifs function on click and on enter key', () => {
  // beforeEach(() => {
  //   const searchGifs = jest.fn();
  //   render(<SearchField searchGifs={searchGifs} />);
  // });
  it('should have a text box and a button', () => {
    const searchGifs = jest.fn();
    render(<SearchField searchGifs={searchGifs} />);
    expect(screen.queryByRole('button')).toBeTruthy();
    expect(screen.queryByRole('textbox')).toBeTruthy();
  });
  it('should not call function if search button is pressed or enter is pressed wihtout text input', () => {
    const searchGifs = jest.fn();
    render(<SearchField searchGifs={searchGifs} />);

    fireEvent.click(screen.queryByRole('button'));
    fireEvent.keyDown(screen.queryByRole('textbox'), {
      key: 'Enter',
      code: 'Enter',
    });
    expect(searchGifs).toHaveBeenCalledTimes(0);
  });
  it('should not call function if search button is pressed after entering text', () => {
    const searchGifs = jest.fn();
    render(<SearchField searchGifs={searchGifs} />);

    fireEvent.change(screen.queryByRole('textbox'), {
      target: { value: 'test' },
    });

    fireEvent.click(screen.queryByRole('button'));
    fireEvent.keyDown(screen.queryByRole('textbox'), {
      key: 'Enter',
      code: 'Enter',
    });

    expect(searchGifs).toHaveBeenCalledTimes(2);
  });
});
