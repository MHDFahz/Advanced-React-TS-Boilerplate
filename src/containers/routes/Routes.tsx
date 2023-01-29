import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ContainerLoader } from '../../components/loader';

import { RouteKeys } from './route-keys';

const Home = lazy(() => import('../home'));
const NotFound = lazy(() => import('../notfound'));

class Routes extends React.Component {
  render() {
    return (
      <Suspense fallback={<ContainerLoader height={500} text={'Loading...'} />}>
        <Switch>
          <Route exact path={RouteKeys.Home} component={Home} />
          <Route exact path={RouteKeys.NotFound} component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    );
  }
}

export default Routes;
