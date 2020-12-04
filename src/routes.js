import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import DonationsPage from './pages/donations';
import FormDonatePage from './pages/form';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={DonationsPage} exact />
      <Route path="/donate" component={FormDonatePage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;