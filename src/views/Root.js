import React from 'react';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import { routes } from 'routes';
import StartView from 'views/StartView';
import Amazon from 'views/Amazon';
import Apple from 'views/Apple';
import Facebook from 'views/Facebook';
import Google from 'views/Google';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path={routes.home} component={StartView} />
        <Route exact path={routes.amazon} component={Amazon} />
        <Route exact path={routes.apple} component={Apple} />
        <Route exact path={routes.facebook} component={Facebook} />
        <Route exact path={routes.google} component={Google} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;
