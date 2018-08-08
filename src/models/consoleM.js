export default {
    namespace: "consoleInfo",
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