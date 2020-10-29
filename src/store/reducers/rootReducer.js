import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { combineReducers } from 'redux';
//syncing Data with Firestore 
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    //syncing data with firestore 
    firestore: firestoreReducer
})

export default rootReducer;

