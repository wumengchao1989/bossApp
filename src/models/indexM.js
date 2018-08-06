import {login} from "../services/IndexPage";

export default {
    namespace: "model",
    state: {
        name: "wmcs112321"
    },
    effects: {
        * login({payload}, {call, put, select}) {
            let backData = yield call(login, payload);
            if (backData.success) {
                yield put({
                    type: "update",
                    payload: {
                        name: backData.role
                    }
                });
                storage.save({
                    key: 'loginState',   // Note: Do not use underscore("_") in key!
                    data: {
                        ifLogin: true,
                        role: backData.role,
                        menuInfo:backData.result,
                        username:payload.username
                    },
                    expires: 1000 * 3600
                });
                yield payload.component.navigation.goBack();
            } else {
                alert("登录失败")
            }
        },
    },
    reducers: {
        update(state, action) {
            return {...state, ...action.payload};
        },
    }
}