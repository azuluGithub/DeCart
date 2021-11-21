//local imports
import {
    ADD_TO_CART_ISLOADING,
    ADD_TO_CART_SUCCESS,
    ADD_TO_CART_FAILURE,
    UPDATE_CART_ISLOADING,
    UPDATE_CART_SUCCESS,
    UPDATE_CART_FAILURE,
    GET_CART_ISLOADING,
    GET_CART_SUCCESS,
    GET_CART_FAILURE,
    DELETE_CART_ISLOADING,
    DELETE_CART_SUCCESS,
    DELETE_CART_FAILURE
} from '../types/cartTypes';

/**
 * #initialize cart state
 */
 const initCartState = {
    message: '',
    cart: [],
    itemsInCart: 0,
    cartTotalPrice: 0,
    add_to_cart_message: '',
    add_to_cart_isLoading: true,
    get_cart_message: '',
    get_cart_isLoading: true,
    update_cart_message: '',
    update_cart_isLoading: true,
    delete_cart_message: '',
    delete_cart_isLoading: true
}

/**
 * # updates state based on the response from the server
 */
export const cartReducer = (state=initCartState, action) => {
    switch(action.type) {
        case GET_CART_ISLOADING:
            return {
                ...state,
                get_cart_isLoading: action.payload
            }
        case GET_CART_SUCCESS:
            return {
                ...state,
                cart: action.payload.cart,
                cart_isLoading: action.payload.isLoading
            }
        case GET_CART_FAILURE:
            return {
                ...state,
                get_cart_message: action.payload.message,
                get_cart_isLoading: action.payload.isLoading
            }

        case DELETE_CART_ISLOADING:
            return {
                ...state,
                delete_cart_isLoading: action.payload
            }
        case DELETE_CART_FAILURE:
        case DELETE_CART_SUCCESS:
            return {
                ...state,
                delete_cart_message: action.payload.message,
                delete_cart_isLoading: action.payload.isLoading
            }

        case ADD_TO_CART_ISLOADING:
            return {
                ...state,
                add_to_cart_isLoading: action.payload
            }
        case ADD_TO_CART_SUCCESS:
            return {
                ...state,
                cart: [ ...state.cart, action.payload.product], //check later
                cartTotalPrice: state.cartTotalPrice + (action.payload.product.price) * (action.payload.product.quantity),
                itemsInCart: state.itemsInCart + 1, //check later
                add_to_cart_isLoading: action.payload.isLoading
            }
        case ADD_TO_CART_FAILURE:
            return {
                ...state,
                add_to_cart_message: action.payload.message,
                add_to_cart_isLoading: action.payload.isLoading
            }
        
        case UPDATE_CART_ISLOADING:
            return {
                ...state,
                update_cart_isLoading: action.payload
            }
        case UPDATE_CART_SUCCESS:
            return {
                ...state,
                cart: action.payload.cart,
                update_cart_isLoading: action.payload.isLoading
            }
        case UPDATE_CART_FAILURE:
            return {
                ...state,
                update_cart_message: action.payload.message,
                update_cart_isLoading: action.payload.isLoading
            }
        default:
            return state;
    }
}
