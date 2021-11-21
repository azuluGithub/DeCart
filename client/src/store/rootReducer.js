//npm packages
import { combineReducers } from 'redux';

//local imports
import { cartReducer } from './reducers/cartReducer';
import { authReducer } from './reducers/authReducer';
import { productsReducer } from './reducers/productsReducer';

/**
 * #puts all reducers into one reducer
 */
export const rootReducer = combineReducers({
    cart: cartReducer,
    auth: authReducer,
    products: productsReducer
});