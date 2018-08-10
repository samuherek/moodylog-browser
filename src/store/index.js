import { createStore, compose, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducers from '../reducers/index';

const logger = createLogger({
  collapsed: true
});

const store = createStore(
  reducers,
  compose(
    applyMiddleware(ReduxThunk, logger),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
      ? window.devToolsExtension()
      : f => f
  )
);

export default store;
