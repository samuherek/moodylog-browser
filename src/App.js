import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import globals from './styles/global';

// COMPONENTS
import PrivateRoute from './PrivateRoute';
import Auth from './routes/Auth';
import Dashboard from './routes/Dashboard';
import Mood from './routes/Mood';
import Analtyics from './routes/Analytics';
import Account from './routes/Account';
import Ph from './routes/Ph';
import Spinner from './components/Spinner';
import withProfile from './context/profile/withProfile';

// ACTIONS/CONFIG
import { fireAuth } from './firebase';

type Props = {
  context: Object
};

class App extends Component<Props> {
  componentDidMount() {
    const { getProfileFromDb, resetToDefaultProfile } = this.props.context;
    fireAuth.startListeningToAuthChanges(getProfileFromDb, resetToDefaultProfile);
  }

  render() {
    const { loaded } = this.props.context;

    if (!loaded && fireAuth.isAuthenticated()) {
      return (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh'
          }}
        >
          <Spinner />
        </div>
      );
    }

    return (
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
        <Route path="/auth" component={Auth} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/mood" component={Mood} />
        <PrivateRoute path="/analytics" component={Analtyics} />
        <PrivateRoute path="/account" component={Account} />
        <PrivateRoute path="/ph" component={Ph} />
      </Switch>
    );
  }
}

export default withProfile(App);
