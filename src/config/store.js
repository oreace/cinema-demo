import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from '../reducers/';
import RNFirebase from 'react-native-firebase';
import { reactReduxFirebase } from 'react-redux-firebase';

//create an array of middleware options
const middleware = []


//add thunk to middleware
middleware.push(thunk)

const reactNativeFirebaseConfig = {
  debug: true,
};

const reduxFirebaseConfig = {
  userProfile: 'users',
  attachAuthIsReady: true,
  firebaseStateName: 'firebase',
  useFirestoreForProfile: true,
};
const initialState = { firebase: {} };
// initialize firebase
const firebase = RNFirebase.initializeApp(reactNativeFirebaseConfig);


const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['loading', 'error'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const rootStore = createStore(
  persistedReducer,
  initialState,
  compose(reactReduxFirebase(firebase, reduxFirebaseConfig), applyMiddleware(...middleware)),
)

export const store = rootStore;

export const persist = callback => persistStore(rootStore, null, callback)
