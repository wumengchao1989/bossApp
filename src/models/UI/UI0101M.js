import {get_company_list, update_company} from "../../services/company";


export default {
    namespace: "ui0101Info",
    state: {
        name: "基本信息",
        company_info:{}
    },
    effects: {
        *get_company_list({payload},{call,put}){
            const backData=yield call(get_company_list,payload);
            yield put({
                type:"update",
                payload:{
                    company_info: backData.result[0]
                }
            })
        },
        *update_company({payload},{call,put}){
            const backData=yield call(update_company,payload.update);
            if(backData.success){
                const backData=yield call(get_company_list,{id:payload.id});
                yield put({
                    type:"update",
                    payload:{
                        company_info: backData.result[0]
                    }
                });
                payload.navi.goBack();
            }else{
                alert(backData.result)
            }
        }
    },
    reducers: {
        update(state, action) {
            return {...state, ...action.payload};
        },
    }
}