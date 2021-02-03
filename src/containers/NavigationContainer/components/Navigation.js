import React, { Fragment, lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from 'containers/NavbarContainer';
import Dashboard from 'containers/DashboardContainer';
import Favorites from 'containers/FavoritesContainer';
import Spinner from 'components/Common/Spinner';

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
