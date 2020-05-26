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
import reducers from './reducers';

// redux-devtools
import { composeWithDevTools } from 'redux-devtools-extension';

// react-redux-firebase
import firebase from 'firebase/app';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import { firebaseConfig } from './common/firebaseConfig';

const store = createStore(
  reducers,
  compose(composeWithDevTools(applyMiddleware(reduxThunk))),
);

const rrfProps = {
  firebase,
  config: firebaseConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
