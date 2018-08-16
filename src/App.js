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
import ProfileProvider from './context/ProfileProvider';

// ACTIONS/CONFIG
import { fireAuth } from './firebase';

class App extends Component {
  render() {
    const { loading } = this.props;

    if (loading && fireAuth.isAuthenticated()) {
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
      <ProfileProvider>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
          <Route path="/auth" component={Auth} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/mood" component={Mood} />
          <PrivateRoute path="/analytics" component={Analtyics} />
          <PrivateRoute path="/account" component={Account} />
          <PrivateRoute path="/ph" component={Ph} />
        </Switch>
      </ProfileProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.profile.loading
  };
};

export default connect(mapStateToProps)(App);
