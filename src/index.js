import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import {createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import firebase from 'firebase/app'
import fbConfig from './config/fbConfig'

const store = createStore(rootReducer,
  compose(
      applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
      reduxFirestore(fbConfig)
  )
);

const config = {
  userProfile: 'users', // where profiles are stored in database,
  useFirestoreForProfile: true
};

const rrfProps = {
  firebase,
  config,
  dispatch: store.dispatch,
  createFirestoreInstance,


}


ReactDOM.render(
  <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
          <App />
      </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root'));
serviceWorker.unregister();