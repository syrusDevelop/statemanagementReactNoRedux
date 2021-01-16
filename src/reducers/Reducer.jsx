const Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_GLOBALVALUE':
            return {
                ...state,
                posts: action.payload
            };
        default:
            return state;
    }
};

export default Reducer;