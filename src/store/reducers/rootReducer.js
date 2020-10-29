import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { combineReducers } from 'redux';
//syncing Data with Firestore 
import { firestoreReducer } from 'redux-firestore';
//syncing Data with Firebase for auth 
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    //syncing data with firestore 
    firestore: firestoreReducer,
    //syncing data with firebase for auth 
    firebase: firebaseReducer
})

export default rootReducer;

