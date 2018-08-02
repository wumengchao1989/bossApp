import {login} from "./src/services/IndexPage";

export default {
    namespace: "model",
    state: {
        name: "wmcs112321"
    },
    effects: {
        * login({payload}, {call, put,select}) {
            let backData = yield call(login,payload);
            yield put({
                type: "update",
                payload: {
                    name: backData.role
                }
            });
        },
    },
    reducers: {
        update(state, action) {
            return {...state, ...action.payload};
        },
    }
}