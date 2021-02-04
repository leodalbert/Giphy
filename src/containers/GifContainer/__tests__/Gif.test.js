import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import Gif from '../components/Gif';

describe('The Gif Component', () => {
  const addFave = jest.fn();
  const removeFave = jest.fn();

  const defaultProps = {
    gif: {
      id: 1,
      fixed_height: {
        url:
          'https://media3.giphy.com/media/l4FGlmD871ayCC3cs/200_d.gif?cid=4647a4e0zpy2q66gi665l5myr76tdfrbui8x6fj2v3z0ugbu&rid=200_d.gif',
        height: '200',
        width: '200',
      },
    },
    faveIds: [],
    removeFave,
    addFave,
  };

  it('should display an img', () => {
    render(<Gif {...defaultProps} />);
    expect(screen.queryByRole('img')).toBeTruthy();
  });

  it('should fire addFave function if img is clicked and gif.id is not in faveIds prop array', () => {
    render(<Gif {...defaultProps} />);
    fireEvent.click(screen.queryByRole('img'));
    expect(addFave).toHaveBeenCalled();
  });
  it('should fire removeFave function if img is clicked and gif.id is in faveIds prop array', () => {
    render(<Gif {...defaultProps} faveIds={[1]} />);
    fireEvent.click(screen.queryByRole('img'));
    expect(removeFave).toHaveBeenCalled();
  });
});
