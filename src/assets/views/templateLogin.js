const loginGoogle= () => {
    console.log('login con google');
}
export const templateLogin = ()=>{
    const containerLogin=
    document.createElement('div');

    const contentLogin=`<p>Login con google</p>
                            <button id='login'>Login with google</button>`
    containerLogin.innerHTML= contentLogin

    const btn= containerLogin.querySelector('#login');

    btn.addEventListener('click', () =>{
        loginGoogle();

        return containerLogin;
    })
                        }