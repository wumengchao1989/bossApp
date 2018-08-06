

export default {
    namespace: "ui0101Info",
    state: {
        name: "基本信息"
    },
    effects: {

    },
    reducers: {
        update(state, action) {
            return {...state, ...action.payload};
        },
    }
}