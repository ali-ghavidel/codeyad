import axios from "axios"
import { RECIEVE_USER_ERROR, RECIEVE_USER_RESPONSE, SEND_USER_REQUEST } from "./userType"

export const sendUserRequest = () => {
    return {
        type: SEND_USER_REQUEST

    }
}

export const recieveUserResponse = (data) => {
    return {
        type: RECIEVE_USER_RESPONSE,
        payload: data
    }
}

export const recieveUserError = (error) => {
    return {
        type: RECIEVE_USER_ERROR,
        payload: error
    }
}
/* without thunk */
export const getUsers = (dispatch) => { 
        dispatch(sendUserRequest());
        axios.get('https://jsonplaceholder.typicode.com/users').then(res=>{
            dispatch(recieveUserResponse(res.data));
        }).catch(err=>{
            dispatch(recieveUserError(err.message))
    })
    
}