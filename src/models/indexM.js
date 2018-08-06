import {login} from "../services/IndexPage";

export default {
    namespace: "model",
    state: {
        name: "wmcs112321"
    },
    effects: {
        * login({payload}, {call, put,select}) {
            let backData = yield call(login,payload);
            if(backData.success){
                yield put({
                    type: "update",
                    payload: {
                        name: backData.role
                    }
                });
                storage.save({
                    key: 'loginState',   // Note: Do not use underscore("_") in key!
                    data: {
                       ifLogin:true,
                    },
                    // if not specified, the defaultExpires will be applied instead.
                    // if set to null, then it will never expire.
                    expires: 1000 * 60
                });
                yield payload.component.navigation.navigate("Home")
            }
        },
    },
    reducers: {
        update(state, action) {
            return {...state, ...action.payload};
        },
    }
}