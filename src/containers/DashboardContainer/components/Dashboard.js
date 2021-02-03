import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Dashboard = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>dash</div>
    </div>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
