export default {
    namespace: "homeInfo",
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