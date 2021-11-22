//npm package
import { Link } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';

//local import
import "./NavBar.css";

/**
 * DISPLAY LINKS AT THE TOP OF THE PAGE
 */
const NavBar = () => {
    /**
     * #GET THE API KEY TO CONDITIONALLY RENDER INNER AND OUTER LINKS
     */
    const apiKey = window.sessionStorage.getItem("api-key");

    /**
     * #FETCH DATA FROM API CALLS FROM REDUX STATE
     */
    const numOfItems = useSelector((state) => state.cart.itemsInCart);

    return (
        <div className='nav-bar'>
            <div className="nav-bar-container">
                <div className="nav-logo">
                    <div className="nav-logo-left">
                        <FaShoppingCart
                            className="nav-logo-left-icon"
                        />
                    </div>
                    <div className="nav-logo-right">
                        <span>&#393;&egrave; Cart</span>
                    </div>
                </div>
                <div className="nav-links">
                    {
                        apiKey ?
                        <>
                            <Link className="nav-item link" to="/">
                                home
                            </Link>
                            <Link className="nav-cart-item link" to="/cart">
                                <FaShoppingCart className="nav-cart-icon"/>
                                <div className="nav-cart-badge">
                                    { numOfItems }
                                </div>
                            </Link>
                        </>
                        :
                        <div className="nav-buttons">
                            <Link className="nav-button nav-button-left link" to="/auth/signin">
                                signin
                            </Link>
                            <Link className="nav-button nav-button-right link" to="/auth/signup">
                                signup
                            </Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default NavBar
