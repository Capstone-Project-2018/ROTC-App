import firebase from 'firebase';

var config = {  
    apiKey: "AIzaSyB9F82jQRgbyl5-Mq6lXFERUFy1SiUcNzw",
    authDomain: "air-force-rotc-app.firebaseapp.com",
    databaseURL: "https://air-force-rotc-app.firebaseio.com",
    projectId: "air-force-rotc-app",
    storageBucket: "air-force-rotc-app.appspot.com",
    messagingSenderId: "311597353456" 
};
firebase.initializeApp(config);

export default firebase;