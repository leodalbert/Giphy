import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from 'containers/NavbarContainer';
import Dashboard from 'containers/DashboardContainer';
import Favorites from 'containers/FavoritesContainer';

const Navigation = () => {
  return (
    <Fragment>
      <section>
        <Navbar />
        <Switch>
          <Route exact path={`/favorites`} component={Favorites} />
          <Route exact path={`/`} component={Dashboard} />
        </Switch>
      </section>
    </Fragment>
  );
};

export default Navigation;
