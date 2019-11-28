import { loginGoogle } from '../js/auth.js';
import { signInWithEmail } from '../js/auth.js';

export const templateLogin = () => {
  // creamos div que contendrá la plantilla
  const containerLogin = document.createElement('div');
  // creamos el contenido del login
  const contentLogin = `    
  <div class="container login">
    <div class="login-content"> 
        <h4>Inicia sesión en MovArt</h4>
        <p>Ingresa tu correo electrónico</p>
        <input type="text" id="login-mail" placeholder="Ingresa tu correo electrónico">
        <p>Ingresa tu contraseña</p>
        <input type="password" id="login-pass" placeholder="Ingresa tu contraseña">
        <a class="small-text italic center grey-text" href="#">¿Olvidaste tu contraseña?</a>
        <button class="login-btn" id="loginWithEmail">Ingresar</button>
        <button class="login-google-btn" id="login-google"><img class="google-icon" src="https://firebasestorage.googleapis.com/v0/b/scl010-sport-match.appspot.com/o/google-icon.png?alt=media&token=eb8c0a4f-cc9a-4e0b-a74d-96a1b36ae49e" alt="google-icon">Inicia sesión con Google</button>
        <a href="#/create" class="small-text center purple-text margin-top">¿Aún no tienes una cuenta?<br><span class="bold">Regístrate aquí</span></a>
    </div>
  </div>
  `;
  // pasar el contenido al div
  containerLogin.innerHTML = contentLogin;

  //LOGIN WITH EMAIL AND PASSWORD
  const btn = containerLogin.querySelector('#loginWithEmail');
  btn.addEventListener('click', () => {
    let loginEmail = document.getElementById('login-mail').value;
    console.log(loginEmail);
    let loginPass = document.getElementById('login-pass').value;
    console.log(loginPass);
    signInWithEmail(loginEmail, loginPass);
    console.log("clic iniciar sesion")
  });

  const btnGoogle = containerLogin.querySelector('#login-google');
  // evento del botón que llama a la autentificación de google.
  btnGoogle.addEventListener('click', () => {
    loginGoogle();
  });
  return containerLogin;
}