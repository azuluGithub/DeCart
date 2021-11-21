//npm packages
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

//local imports
import { rootReducer } from './rootReducer';

/**
 * # creates redux store and passes to the app Provider so that it can be passed to the whole application
 * # thunk is responsible for async action e.g API call to the node server
 */
export const store = createStore(rootReducer, applyMiddleware(thunk));