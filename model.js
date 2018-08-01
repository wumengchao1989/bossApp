import {login} from "./src/services/IndexPage";

export default{
    namespace:"model",
    state:{
        name:"wmc"
    },
    effects:{
        *login({payload}, {call, put}) {
            let backData = yield call(login, {username: "wmc_maintain@qq.com", password: "supercxp@123"});
            yield alert(backData)
            yield put({
                type:"update",
                payload:{
                    name:backData.role
                }
            })
        },
    },
    reducers:{
        update(state, action) {
            return {...state, ...action.payload};
        },
    }
}