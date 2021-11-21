//local imports
import {
    GET_PRODUCTS_FAILURE,
    GET_PRODUCTS_SUCCESS, 
    GET_PRODUCTS_ISLOADING
} from '../types/productTypes';


/**
 * #initialize products state
 */
const initProductsState = {
    products: [],
    products_message: '',
    products_isLoading: true
}
/**
 * # updates state based on the response from the server
 */
export const productsReducer = (state=initProductsState, action) => {
    switch(action.type) {
        //on get products loading: update loading property accordingly
        case GET_PRODUCTS_ISLOADING:
            return {
                ...state,
                products_isLoading: action.payload
            }
        case GET_PRODUCTS_SUCCESS:
            //on get products success: update loading property and set products
            return {
                ...state,
                products: action.payload.products,
                products_isLoading: action.payload.isLoading
            }
        case GET_PRODUCTS_FAILURE:
            //on get products failure: update loading and error message
            return {
                ...state,
                products_message: action.payload.message,
                products_isLoading: action.payload.isLoading
            }
        default:
            return state;
    }
}
