//npm packages
import axios from 'axios';

//local imports
import {
    SIGNUP_ISLOADING,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    SIGNIN_ISLOADING, 
    SIGNIN_SUCCESS,
    SIGNIN_FAILURE
} from '../types/authTypes';

//the server url stored in .env
const port = process.env.REACT_APP_BASE_URL;

//store api key on the browser for user to log in
const saveApiKeyInSession = apiKey => {
    window.sessionStorage.setItem("api-key", apiKey);
}

/**
 * # creates a new user
 * # if registration was successful:- dispatch success message to the reducer which tells use to log in
 * # if registration failed:- dispatch error message to the reducer
 * # activates loading spinner while waiting for response
 * # uses axios to send signUp data to the node server
 */
export const signUpAction = signUpValues => {
    return async dispatch => {
        try {
            dispatch({ type: SIGNUP_ISLOADING, payload: true });

            const config = {
                headers: { 'Content-Type': 'application/json' }
            }

            const body = JSON.stringify(signUpValues);
            const res = await axios.post(`${port}/auth/signup`, body, config);

            dispatch({ type: SIGNUP_SUCCESS, payload: { message: res.data.message, isLoading: false } });
        }
        catch(e) {
            if (e.response.data.message) {
                return dispatch({ type: SIGNUP_FAILURE, payload: { message: e.response.data.message, isLoading: false } });
            }
            dispatch({ type: SIGNUP_FAILURE, payload: { message: 'Failed to create account. Please try again later ', isLoading: false } });
        }
    }
}

/**
 * # logs in registered user
 * # if log in was successful: - save API Key to the browser
 * # if log in failed:- dispatch error message to the reducer
 * # activates loading spinner while waiting for response
 * # uses axios to send signIn data to the node server
 */

export const signInAction = signInValues => {
    return async dispatch => {
        try {
            dispatch({ type: SIGNIN_ISLOADING, payload: true });

            const config = {
                headers: { 'Content-Type': 'application/json' }
            }

            const body = JSON.stringify(signInValues);
            const res = await axios.post(`${port}/auth/signin`, body, config);
        
            saveApiKeyInSession(res.data.token);

            dispatch({ type: SIGNIN_SUCCESS, payload: { isLoading: false } });
        }
        catch(e) {
            if (e.response.data.message) {
                return dispatch({ type: SIGNIN_FAILURE, payload: { message: e.response.data.message, isLoading: false } });
            }
        
            dispatch({ type: SIGNIN_FAILURE, payload: { message: 'Unable to log in. Please try again later', isLoading: false }});
        }
    }
}