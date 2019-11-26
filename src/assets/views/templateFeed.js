
import { logOut } from '../js/auth.js';

export const templateFeed = () => {
    const containerFeed = document.createElement('div');
    const contentFeed =`
    <h1>Bienvenido al Muro</h1>
    <button class="btn" id="sign-out">Cerrar Sesión</button>
    <p>Contenido del Muro</p>
    `;
    containerFeed.innerHTML = contentFeed;

    const logOutBtn = containerFeed.querySelector('#sign-out');
    logOutBtn.addEventListener('click', () => {
    logOut();
    window.location.hash = "#/home";
    });

    return containerFeed;
}
