import React, { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import { routes, PrivateRoutes } from "config";
import {
  Login,
  Signup,
  Dashboard,
  Players,
  Profiles,
  Validation,
} from "components";

export const getRoutes = () => (
  <Fragment>
    <Route exact path={routes.login} component={Login} />
    <Route exact path={routes.signup} component={Signup} />
    {/* <PrivateRoutes> */}
    <Route exact path={routes.dashboard} component={Dashboard} />
    <Route exact path={routes.players} component={Players} />
    <Route exact path={routes.profiles} component={Profiles} />
    <Route exact path={routes.validation} component={Validation} />
    <Redirect from="/" to={routes.dashboard} />
    {/* </PrivateRoutes> */}
  </Fragment>
);
