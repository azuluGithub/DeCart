//npm packages//npm packages
import {  useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

//local imports
import Products from "../products/Products";
import "./DashBoard.css";
import { getProductsAction } from '../../store/actions/productsAction';
import NavBar from '../../components/nav_bar/NavBar';
import { getCartAction } from '../../store/actions/cartActions';

/**
 * LANDING PAGE OF LOGGED IN USERS
 */

const DashBoard = () => {

    /**
     * #GRAP API-KEY FROM BROWSER INORDER TO LOGIN USERS AND DO API REQUESTS
     */
    const apiKey = window.sessionStorage.getItem("api-key");

    /**
     * #GET API RESPONSES FROM REDUX STATE
     */
    const products = useSelector((state) => state.products.products);
    const loading = useSelector((state) => state.products.products_isLoading);

    /**
     * #SEND REQUESTS TO FETCH CART AND PRODUCTS FOR DISPLAY
     */
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductsAction());
        dispatch(getCartAction());
    }, [dispatch]);

    /**
     * #KEEP AUTHENTICATED USERS LOGGED IN
     */
    if (!apiKey) {
        return <Redirect to="/auth/signin"/>;
    }

    /**
     * #CONDITIONALY RENDER THE PAGE BASED ON AVAILABLE DATA
     */
  
    if (loading) {
        return <div className="loading-container">Loading...</div>
    }
    
    if (!products.length && !loading)  {
        return (
            <>
                <NavBar />
                <div className='loading-container'>
                    <h3 className="heading"> No Products.... </h3>
                </div>
            </>
        )
    }
    
    return (
        <div>
            <NavBar />
            <Products products={products} />
        </div>
    )
}

export default DashBoard;