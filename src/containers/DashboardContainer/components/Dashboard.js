import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Collapse, Container, LinearProgress, Slide } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchField from './SearchField';
import SearchResults from './SearchResults';

const useStyles = makeStyles((theme) => ({
  SearchField: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));

const Dashboard = ({ searchGifs, searchResults, loading }) => {
  console.log(searchResults);
  const classes = useStyles();
  return (
    <Fragment>
      {loading && <LinearProgress />}
      <Collapse in={searchResults.length === 0} collapsedHeight={5}>
        <div style={{ minHeight: '30vh' }} />
      </Collapse>
      <div className={classes.SearchField}>
        <SearchField searchGifs={searchGifs} />
      </div>
      <Slide
        direction='up'
        in={searchResults.length > 0}
        mountOnEnter
        unmountOnExit>
        <Container>
          <SearchResults gifs={searchResults} />
        </Container>
      </Slide>
    </Fragment>
  );
};

Dashboard.propTypes = {
  searchGifs: PropTypes.func.isRequired,
  searchResults: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Dashboard;
