import { combineReducers } from 'redux';
import error from './ErrorReducer';
import user from './UserReducer';
import status from './StatusReducer';
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'


const rootReducer = combineReducers({
  error,
  user,
  status,
  firestore:firestoreReducer,
  firebase:firebaseReducer,
});

export default rootReducer;
