import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
  snackbar: {
    background: theme.palette.primary.main,
  },
}));

const Alert = ({ alert, removeAlert }) => {
  useEffect(() => {
    alert && setIsOpen(alert);
  }, [alert]);
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    if (alert === isOpen) {
      removeAlert();
      setIsOpen(false);
    }
  };
  const classes = useStyles();

  return (
    <Fragment>
      <Snackbar
        style={{ marginTop: '70px' }}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        open={!!isOpen}
        autoHideDuration={1500}
        onClose={handleClose}
        message={alert}
        TransitionComponent={slideTransition}
        ContentProps={{
          classes: {
            root: classes.snackbar,
          },
        }}
      />
    </Fragment>
  );
};

const slideTransition = (props) => {
  return <Slide {...props} direction='right' />;
};

Alert.propTypes = {
  alert: PropTypes.string.isRequired,
  removeAlert: PropTypes.func.isRequired,
};
export default Alert;
