const createAccount = () => {
    console.log('crea tu cuenta')
}

export const templateCreate = () => {

const containerCreate = document.createElement('div');
const contentCreate = `<p>crear cuenta</p>
                       <button id='create'>crear cuenta </button> `

containerCreate.innerHTML = contentCreate;

const btn = containerCreate.querySelector('#create');

btn.addEventListener('click', () =>{
    createAccount();
    
})
    return containerCreate;              
}

