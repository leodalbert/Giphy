import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { useMediaQuery } from 'react-responsive';
import { Grid } from '@material-ui/core';
import Gif from 'containers/GifContainer';

const chunk = (arr, size) => {
  const newArr = [];
  let index = 0;
  while (index < arr.length) {
    newArr.push(arr.slice(index, index + size));
    index += size;
  }
  return newArr;
};

const Carousell = ({ gifs }) => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  return (
    <Carousel navButtonsAlwaysVisible animation='slide' indicators={false}>
      {chunk(gifs, isMobile ? 1 : 3).map((arr) => (
        <Grid
          key={arr[0].id}
          container
          spacing={3}
          direction='row'
          justify='space-evenly'>
          {arr.map((gif) => (
            <Grid key={gif.id} item>
              <Gif gif={gif} />
            </Grid>
          ))}
        </Grid>
      ))}
    </Carousel>
  );
};

export default Carousell;
