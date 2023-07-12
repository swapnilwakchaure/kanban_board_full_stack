import * as types from "./actionTypes";
import axios from "axios";


const register = (user) => (dispatch) => {
    dispatch({ type: types.REGISTER_POST_REQUEST });

    return axios
        .post('http://localhost:8080/upload', user)
        .then((res) => {
            dispatch({ type: types.REGISTER_POST_SUCCESS, payload: res });
            alert(`${res.name} registration successful`);
        })
        .catch((error) => {
            dispatch({ type: types.REGISTER_POST_FAILURE });
            console.log('error: ',error);
        })
}


export { register };