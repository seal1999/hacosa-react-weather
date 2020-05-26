// react
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

// router
import { BrowserRouter as Router } from 'react-router-dom';

// redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers/index';

// redux-devtools
import { composeWithDevTools } from 'redux-devtools-extension';

// react-redux-firebase (v2 -> v3 Migration)
import firebase from './common/firebaseConfig';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';

// store
const store = createStore(
  rootReducer,
  compose(composeWithDevTools(applyMiddleware(reduxThunk))),
);

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <Router>
        <App />
      </Router>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root'),
);
