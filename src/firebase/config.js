import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCWw9fDu-sUVeXuBMt5z4JEpgpT6XrdyWo",
    authDomain: "noteapp-e5af0.firebaseapp.com",
    projectId: "noteapp-e5af0",
    storageBucket: "noteapp-e5af0.appspot.com",
    messagingSenderId: "1039529052975",
    appId: "1:1039529052975:web:6a8c5a555d87cfff57afda",
    measurementId: "G-QGDBDNPHBZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase;