import { loginGoogle } from './../js/auth.js';
import { createAccount } from './../js/auth.js';

export const templateCreate = () => {
// creamos div que contendrá la plantilla
const containerCreate = document.createElement('div');
// creamos el contenido del login
const contentCreate =`<div class="container login">
                        <div class="login-content"> 
                          <h4>Regístrarse en MovArt</h4>
                          <input class="input-register" type="text" id="register-name" placeholder="Ingresa tu nombre">
                          <input class="input-register" type="text" id="register-lastname" placeholder="Ingresa tu apellido">
                          <input class="input-register" type="text" id="register-mail" placeholder="Ingresa tu correo electrónico">
                          <input class="input-register" type="password" id="register-pass1" placeholder="Ingresa tu contraseña">
                          <input class="input-register bottom" type="password" id="register-pass2" placeholder="Vuelve a escribir tu contraseña">
                          <button class="login-btn orange-bg" id="create">Regístrate</button>
                          <button class="login-google-btn" id="login-google"><img class="google-icon" src="https://firebasestorage.googleapis.com/v0/b/scl010-sport-match.appspot.com/o/google-icon.png?alt=media&token=eb8c0a4f-cc9a-4e0b-a74d-96a1b36ae49e" alt="google-icon">Regístrate con Google</button>
                          <a href="#/login" class="small-text center purple-text margin-top">¿Ya tienes una cuenta?<br><span class="bold">Ingresa aquí</span></a>
                        </div>
                      </div>`;

// pasar el contenido al div
containerCreate.innerHTML = contentCreate;
// le pido que busque el id del boton dentro del div creado
const btnCreate = containerCreate.querySelector('#create');
// evento del botón que llama a la autentificación de google.
btnCreate.addEventListener('click', () => {
  createAccount();
})

const btnGoogle = containerCreate.querySelector('#login-google');
// evento del botón que llama a la autentificación de google.
btnGoogle.addEventListener('click', () => {
  loginGoogle();
});

return containerCreate;
}
