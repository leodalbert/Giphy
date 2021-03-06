import React from 'react';
import PropTypes from 'prop-types';
import {
  Collapse,
  Container,
  LinearProgress,
  Slide,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchField from './SearchField';
import SearchResults from './SearchResults';
import Carousel from 'containers/CarouselContainer';

const useStyles = makeStyles((theme) => ({
  SearchField: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));

const Dashboard = ({ searchGifs, searchResults, loading }) => {
  const classes = useStyles();

  return (
    <div style={{ marginTop: '74px' }}>
      {loading && <LinearProgress />}
      <Collapse in={searchResults.length === 0} collapsedHeight={0}>
        <div
          style={{ minHeight: '30vh', marginTop: '20px', textAlign: 'center' }}>
          <Typography color='secondary' variant='h5' gutterBottom>
            Trending Giphs...
          </Typography>
          <Container>
            <Carousel />
          </Container>
        </div>
      </Collapse>
      <div className={classes.SearchField}>
        <SearchField searchGifs={searchGifs} />
      </div>
      <Slide direction='up' in={searchResults.length > 0}>
        <Container>
          <SearchResults gifs={searchResults} />
        </Container>
      </Slide>
    </div>
  );
};

Dashboard.propTypes = {
  searchGifs: PropTypes.func.isRequired,
  searchResults: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Dashboard;
