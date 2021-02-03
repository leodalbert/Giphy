import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import logo from 'assets/1*cHv3GloBXiaWQ1Y8TVW7Ew.png';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  navbarLogo: {
    height: 50,
  },
  wrapper: {
    justifyContent: 'space-between',
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='fixed' color='secondary'>
        <Toolbar className={classes.wrapper}>
          <IconButton edge='end' component={Link} to='/'>
            <img src={logo} alt='logo' className={classes.navbarLogo} />
          </IconButton>
          <Button color='inherit' component={Link} to='/favorites'>
            <Typography color='primary'>Favorites</Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
