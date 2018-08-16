// NPM
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// COMPONENTS

// ACTIONS/CONFIG
import { fireAuth } from './firebase';

// MODULE

type Props = {
  component: ComponentType<any>
};

export default function PrivateRoute({ component: Component, ...rest }: Props) {
  if (!fireAuth.isAuthenticated()) {
    return <Redirect to="/auth" />;
  }
  return <Route {...rest} render={props => <Component {...props} />} />;
}
