export const initFirebase =()=>{

    // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAvrHl07zcDjZUkcnbr4fY7hJu9z9br2aQ",
    authDomain: "moving-916f7.firebaseapp.com",
    databaseURL: "https://moving-916f7.firebaseio.com",
    projectId: "moving-916f7",
    storageBucket: "moving-916f7.appspot.com",
    messagingSenderId: "616782302696",
    appId: "1:616782302696:web:9d10be84ee6606e884285d",
    measurementId: "G-QYH7R6PCK8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


}