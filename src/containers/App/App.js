import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';

import Navigation from 'containers/NavigationContainer';
import { getFaves } from 'actions/favorites';
import { getTrending } from 'actions/dashboad';

//  Material Ui
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './meta/theme';

const App = ({ getFaves, getTrending }) => {
  // load initial preserved faves from JSON-db
  useEffect(() => {
    getFaves();
    getTrending();
  }, [getFaves, getTrending]);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navigation />
      </Router>
    </ThemeProvider>
  );
};

export default connect(null, { getFaves, getTrending })(App);
