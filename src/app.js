// Routes
import { initRouter } from './route.js';
import {initFirebase} from './assets/js/initFirebase.js';

/* init será la función que llame a initRouter apenas cargue el sitio */
const init = () => {
  initRouter();
  initFirebase();
}

/* para probar si firebase funcionó 
let app = firebase.app();
console.log(app);
*/
window.addEventListener('load', init);