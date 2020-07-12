export default {
    namespace: 'try',
    state: {
        'xixi': 'nishishui'
    },
    reducers: {
        'delete'(state, { payload: id }) {
            return state.filter(item => item.id !== id);
        },
    },
};