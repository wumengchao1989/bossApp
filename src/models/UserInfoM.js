export default {
    namespace: "userInfo",
    state: {
        role:"",
        username:""
    },
    effects: {

    },
    reducers: {
        update(state, action) {
            return {...state, ...action.payload};
        },
    }
}