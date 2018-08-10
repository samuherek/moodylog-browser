import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import globals from './styles/global';

// const { ipcRenderer } = window.require('electron');

// const { app } = window.require('electron').remote;
// COMPONENTS
import Auth from './scenes/Auth';
import Dashboard from './scenes/Dashboard';
import Mood from './scenes/Mood';

// ACTIONS/CONFIG

class App extends Component {
  render() {
    const { isAuthenticated, loading } = this.props;

    if (loading) {
      return <div>Loading</div>;
    }

    if (isAuthenticated) {
      return (
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/mood" component={Mood} />
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
