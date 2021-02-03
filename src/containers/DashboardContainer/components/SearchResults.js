import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Gif from 'containers/GifContainer';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  imgGrid: {
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
    },
  },
}));

const renderCards = (gifs) => {
  return gifs.map((gif) => {
    return (
      <Grid key={gif.id} item>
        <Gif gif={gif} />
      </Grid>
    );
  });
};

const SearchResults = forwardRef(({ gifs }, ref) => {
  const classes = useStyles();
  return (
    <Grid container ref={ref}>
      <Grid
        container
        spacing={3}
        direction='row'
        className={classes.imgGrid}
        alignItems='flex-start'>
        {renderCards(gifs)}
      </Grid>
    </Grid>
  );
});

SearchResults.propTypes = {
  gifs: PropTypes.array.isRequired,
};

export default SearchResults;
