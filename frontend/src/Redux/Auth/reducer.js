import * as types from "./actionTypes";

const initState = {
    isLoading: false,
    isError: false,
    res: ''
};

// action = { type, payload };

const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case types.REGISTER_POST_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
            }
        case types.REGISTER_POST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                res: payload.data
            }
        case types.REGISTER_POST_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        default:
            return state
    }
}


export { reducer };