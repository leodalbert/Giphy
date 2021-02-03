import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Gif from 'containers/GifContainer';
import { Grid, Container, LinearProgress } from '@material-ui/core';
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

const FavoritesContainer = ({ gifs, getFaves, loading }) => {
  const classes = useStyles();
  useEffect(() => {
    getFaves();
  }, [getFaves]);
  return (
    <Container style={{ marginTop: '90px' }}>
      {loading && <LinearProgress />}
      <Grid container>
        <Grid
          container
          spacing={3}
          direction='row'
          className={classes.imgGrid}
          alignItems='flex-start'>
          {renderCards(gifs)}
        </Grid>
      </Grid>
    </Container>
  );
};

FavoritesContainer.propTypes = {
  gifs: PropTypes.array.isRequired,
};

export default FavoritesContainer;
