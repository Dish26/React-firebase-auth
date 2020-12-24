import firebase from 'firebase';

  var firebaseConfig = {
    apiKey: "AIzaSyBB5g2VtVsXuN9gtgdVtATF_O6r9BRoDKw",
    authDomain: "react-auth-b3355.firebaseapp.com",
    projectId: "react-auth-b3355",
    storageBucket: "react-auth-b3355.appspot.com",
    messagingSenderId: "772671319138",
    appId: "1:772671319138:web:2e195a8406edabe065753b"
  };
const fire = firebase.initializeApp(firebaseConfig);

export default fire;