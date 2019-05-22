import groupReducer from './groupReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  groups: groupReducer,
  firestore: firestoreReducer
});

export default rootReducer;