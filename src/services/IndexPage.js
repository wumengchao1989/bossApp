import $ from '../utils/fetch';
async function login(params) {
    console.log("params",params)
    return $.post("/v1//login/",params)
}
export {login}