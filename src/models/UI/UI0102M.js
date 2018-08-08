import {update_company} from "../../services/company";

export default {
    namespace: "ui0102Info",
    state: {

    },
    effects: {

    },
    reducers: {
        update(state, action) {
            return {...state, ...action.payload};
        },
    }
}