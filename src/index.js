// react
import React from 'react';
import ReactDOM from 'react-dom';

// router
import { BrowserRouter as Router } from 'react-router-dom';

// redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

// redux-devtools
import { composeWithDevTools } from 'redux-devtools-extension';

// react-redux-firebase (v3 usage)
import firebase from './common/firebaseConfig';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';

// module (root reducer)
import rootReducer from './module/index';

// component root
import App from './component/App';

// store
const store = createStore(
  rootReducer,
  compose(composeWithDevTools(applyMiddleware(reduxThunk))),
);

// react-redux-firebase config
const rrfProps = {
  firebase,
  config: {} /* ignore user profile */,
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
