/* Funciones relacionadas con autentificación de usuari@s */
import { saveUserInDatabase } from './database.js';
// REGISTRAR NUEVO USUARIO
export const createAccount = () => {
  let userData = {};
  userData.name = document.querySelector('#register-name').value;
  userData.lastName = document.querySelector('#register-lastname').value;
  userData.mail = document.querySelector('#register-mail').value;
  userData.pass1 = document.querySelector('#register-pass1').value;
  //userData.pass2 = document.querySelector('#register-pass2').value;

  if (userData.name == "") {
    alert("debes ingresas un nombre");
    return false;
  }
  if (userData.lastName == "") {
    alert("debes ingresas tu apellido");
    return false;
  }
  if (userData.mail == "") {
    alert("debes ingresas tu correo electrónico");
    return false;
  }
  if (userData.pass1 == "") {
    alert("debes ingresas una contraseña");
    return false;
  }
  if (userData.pass2 == "") {
    alert("debes reingresar tu contraseña");
    return false;
  }
  if (userData.pass1 != userData.pass2) {
    alert("las contraseñas no coinciden, inténtalo nuevamente");
    return false;
  }
  if (userData.name &&
      userData.lastName &&
      userData.mail &&
      userData.pass1 === userData.pass2){
      createUserWithEmail(userData);
  }
};

const createUserWithEmail = (userData) => {
  firebase.auth().createUserWithEmailAndPassword(userData.mail, userData.pass1)
  //buscar porque res para este metdodo de firebase
  .then(result => {
    
    const user = result.user;
    userData.uid = user.uid;
    console.log("El uid es: " + userData.uid);
    let dbResult = saveUserInDatabase(userData);
    user.sendEmailVerification()
  })

  .catch(function(error) {
    // Handle Errors here.
    let errorCode = error.code;
     if (errorCode === "auth/invalid-email") {
       alert ("El correo no es válido")
     }
     else if (errorCode === "auth/weak-password") {
      alert ("La contraseña debe tener al menos 6 caracteres")
    }
     else if (errorCode === "auth/email-already-in-use") {
      alert ("Este correo ya existe")
    }
    //return window.location.hash = "#/profile"
    //let errorMessage = error.message;
  });
}

// LOGIN CON GOOGLE
export const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  // this will return a promise
  firebase.auth().signInWithPopup(provider)
    .then(result => {
      const user = result.user;
      let userName = splitGoogleDisplayName(user.displayName);
      saveUserToDatabaseAfterLogin(user.uid, userName.firstName, userName.lastName, user.email);
      window.location.hash = "#/feed";
      })
      
    .catch(err => {
      console.log(err);
    })
}

const splitGoogleDisplayName = (displayName) => {
  var splitDisplayNameArray = displayName.split(" ");
  let userName = {
    firstName: splitDisplayNameArray[0],
    lastName: splitDisplayNameArray[1],
  }
  return userName;
}
const saveUserToDatabaseAfterLogin = (uid, firstName, lastName, email) => {
  console.log(uid, firstName, lastName, email);
};



export const signInWithEmail = (email, password) => {
  console.log("EMAIL:", email, "PASS:", password);
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(() => {
    window.location.hash = "#/feed";
  })
  .catch(error => {
    console.log("NO FUNCIONA");
    // Handle Errors here.
    var errorCode = error.code;
    if (errorCode === "auth/user-not-found") {
      alert ("Este usuario no está registrado")
    }
    if (errorCode === "auth/wrong-password") {
      alert ("Contraseña incorrecta, inténtalo nuevamente")
    }
    else {
      alert("Ha ocurrido un problema, inténtalo nuevamente")
    }
    console.log(errorCode);
    var errorMessage = error.message;
    console.log(errorMessage);
  });
}

export const logOut = () => {
  firebase.auth().signOut().then(() => {
    console.log("Sign-out successful")
  }).catch(error => {
    // An error happened.
  });
}