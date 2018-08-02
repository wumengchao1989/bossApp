import $ from '../utils/fetch';
async function login(params) {
    return $.post("/v1//login/",params)
}
export {login}