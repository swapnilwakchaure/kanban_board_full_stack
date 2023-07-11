import * as types from "./actionTypes";
import axios from "axios";


const register = (user) => (dispatch) => {
    dispatch({ type: types.REGISTER_POST_REQUEST });

    return axios
        .post('http://localhost:8080/register', user)
        .then((res) => {
            dispatch({ type: types.REGISTER_POST_SUCCESS, payload: res });
        })
        .catch((error) => {
            dispatch({ type: types.REGISTER_POST_FAILURE });
            console.log('error: ',error);
        })
}


export { register };