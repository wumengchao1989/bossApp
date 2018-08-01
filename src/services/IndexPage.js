import $ from '../utils/ajax';

async function login(params) {
    alert("login");
   /* return $.post("/v1/login/",params)*/
}

async function logout(params){
    return $.getJSON("/v1/logout/",params)
}

export {login,logout}