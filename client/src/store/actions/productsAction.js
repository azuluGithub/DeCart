//npm imports
import axios from 'axios';

//local imports
import {
    GET_PRODUCTS_FAILURE,
    GET_PRODUCTS_SUCCESS, 
    GET_PRODUCTS_ISLOADING
} from '../types/productTypes';

//the server url stored in .env
const PORT = process.env.REACT_APP_BASE_URL;

/**
 * # gets all products
 * # if request is successful:- dispatch an array of products to the reducer
 * # if request failed:- dispatch error message to the reducer
 * # activates loading spinner while waiting for response
 * # uses axios to do a get request to the node server
 */
export const getProductsAction = () => {
    
    //grab apiKey from local storage
    const apiKey = window.sessionStorage.getItem("api-key");
    
    return async dispatch => {
        try {
            dispatch({ type: GET_PRODUCTS_ISLOADING, payload: true });

            const config = {
                headers: { 
                    'Authorization': `Bearer ${apiKey}`
                }
            }
            const res = await axios.get(`${PORT}/products`, config);

            dispatch({ type: GET_PRODUCTS_SUCCESS, payload: { products: res.data.products, isLoading: false } });
        }
        catch(e) {
            if (e.response.data.message) {
                return dispatch({ type: GET_PRODUCTS_FAILURE, payload: { message: e.response.data.message, isLoading: false } });
            }

            dispatch({ type: GET_PRODUCTS_FAILURE, payload: { message: 'Unable to GET products', isLoading: false } });
        }
    }
}