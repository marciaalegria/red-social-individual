import {templateLogin} from './assets/views/templateLogin.js';
import {templateCreate} from './assets/views/templateCreate.js';
import { templateHome } from './assets/views/templateHome.js';
import { templateProfile } from './assets/views/templateProfile.js';
import { templateFeed } from './assets/views/templateFeed.js';

/*changeRoute llama a la funcion que carga cada template*/
const changeRouter = (hash) => {
    if (hash === '') {
        return showTemplate('#/home');
    }

    if (hash === '#/home') {
        return showTemplate(hash);
      }
      if (hash === '#/login') {
        return showTemplate(hash);
      }

    if (hash === '#/create') {
        return showTemplate(hash);
    }

    if (hash === '#/profile') {
        return showTemplate(hash);
      }

      if (hash === '#/feed') {
        return showTemplate(hash);
      }
}
//imprimira template en html
const showTemplate = (hash) => {
    const router= hash.substring(2);
    const containerRoot= 
    document.getElementById('root');
    containerRoot.innerHTML='';

    switch (router) {
        case 'home':
            containerRoot.appendChild(templateHome());
        break;
        case 'login':
            containerRoot.appendChild(templateLogin());
        break;
        case 'create':
            containerRoot.appendChild(templateCreate());
        break;
        case 'profile':
            containerRoot.appendChild(templateProfile());
        break;
        case 'feed':
            containerRoot.appendChild(templateFeed());
        break;
        default: 
            containerRoot.innerHTML= `<p>Error 404</p>`
    }
}


 /* initRouter es la función que 'escucha' los cambios de hash */
export const initRouter = () => {
    window.addEventListener('load', changeRouter(window.location.hash));
  
    // reconoce un cambio en el hash y le pasa ese nuevo hash a changeRouter
    if ('onhashchange' in window) {
      window.onhashchange = () => {
        changeRouter(window.location.hash);           
        }
    }
}