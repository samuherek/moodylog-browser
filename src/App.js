import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import globals from './styles/global';

// COMPONENTS
import Auth from './scenes/Auth';
import Dashboard from './scenes/Dashboard';
import Mood from './scenes/Mood';
import Analtyics from './scenes/Analytics';
import Account from './scenes/Account';
import Spinner from './components/Spinner';

// ACTIONS/CONFIG
import { isAuthenticated } from './firebase';

class App extends Component {
  render() {
    const { loading } = this.props;
    const authenticated = isAuthenticated();

    if (loading && authenticated) {
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

    if (authenticated) {
      return (
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/mood" component={Mood} />
          <Route exact path="/analytics" component={Analtyics} />
          <Route exact path="/account" component={Account} />
        </Switch>
      );
    }

    return <Auth />;
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: !!state.auth.uid,
    loading: state.auth.loading
  };
};

export default connect(mapStateToProps)(App);
