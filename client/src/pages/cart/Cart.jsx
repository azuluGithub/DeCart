//npm packages
import {  useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

//local inputs
import "./Cart.css";
import NavBar from '../../components/nav_bar/NavBar';
import { getCartAction } from '../../store/actions/cartActions';
import CartList from './cart_list/CartList';

/**
 * #CART PARENT-COMPONENT
 */
const Cart = () => {

    /**
     * #API-KEY IS TO KEEP THE USER LOGGED IN,
     *  AND PERFORM 'CRUD' OPERATIONS
     */
    const apiKey = window.sessionStorage.getItem("api-key");

    /**
     * #FETCH SERVER RESPONSES FROM REDUX STATE
     */
    const cart = useSelector((state) => state.cart.cart);
    const loading = useSelector((state) => state.cart.get_cart_isLoading);

    /**
     * #SEND REQUEST TO SERVER TO GET CART THEN STORE DATA ON REDUX STATE
     */
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCartAction());
    }, [dispatch]);

    /**
     * #API KEY KEEPS YOU LOGGED IN
     */

    /**
     * #CONDITIONALLY RENDERING BASED ON THE AVAILABLE DATA
     */
    if (!apiKey) {
        return <Redirect to="/auth/signin"/>;
    }
  
    if (loading) {
        return <div className="loading-container">Loading...</div>
    }

    if (!cart.length && !loading)  {
        return (
            <>
                <NavBar />
                <div className='loading-container'>
                    <h3 className="heading"> Your cart is empty.... </h3>
                </div>
            </>
        )
    }

    return (
        <div>
            <NavBar />
            <CartList cart={cart} />
        </div>
    )
}

export default Cart;