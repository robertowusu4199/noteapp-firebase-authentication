import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import notesReducer from '../Reducers/notesReducer'
import { getFirebase,reactReduxFirebase } from "react-redux-firebase";
import { getFirestore,reduxFirestore } from "redux-firestore";
import firebase from '../firebase/config';


 export const store = createStore(notesReducer, compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
    reactReduxFirebase(firebase),
    reduxFirestore(firebase)
));