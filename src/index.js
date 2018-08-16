// NPM
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// COMPONENTS
import App from './App';
import ProfileProvider from './context/profile/ProfileProvider';

// CONFIG
import theme from './styles/theme';
import registerServiceWorker from './registerServiceWorker';

const root = document.getElementById('root');
if (!root) {
  throw new Error('no root element found');
}

ReactDOM.render(
  <ProfileProvider>
    <HashRouter>
      <ThemeProvider theme={theme}>
        <Route component={App} />
      </ThemeProvider>
    </HashRouter>
  </ProfileProvider>,
  root
);

registerServiceWorker();
