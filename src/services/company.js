import $ from '../utils/fetch';
async function get_company_list(params) {
    return $.getJSON("/v1/company/get_company_list/",params)
}

async function update_company(params) {
    return $.post("/v1/company/update_company/",params)
}

async function get_company_contact(params) {
    return $.getJSON("/v1/company/get_company_contact/",params)
}

async function create_company_contact(params) {
    return $.post("/v1/company/create_company_contact/",params)
}
export {create_company_contact,get_company_list,update_company,get_company_contact}