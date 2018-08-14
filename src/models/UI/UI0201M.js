import {get_company_contact} from "../../services/company";

export default {
    namespace: "ui0201Info",
    state: {
        companyContacts:[]
    },
    effects: {
        * get_company_contact({payload}, {call, put}) {
            const backData = yield call(get_company_contact, payload);
            yield put({
                type: "update",
                payload: {
                    companyContacts: backData.result
                }
            })
        },
        *create_company_contact({payload},{call,put}){
            const backData=yield call(create_company_contact,payload)
        }

    },
    reducers: {
        update(state, action) {
            return {...state, ...action.payload};
        },
    }
}