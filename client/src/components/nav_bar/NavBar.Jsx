//npm package
import { Link } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';

//local import
import "./NavBar.css";

/* #Is positioned at top bottom of the page */

const NavBar = () => {
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
                    <Link className="nav-item link" to="/">
                        home
                    </Link>
                    <Link className="nav-cart-item link" to="/cart">
                        <FaShoppingCart className="nav-cart-icon"/>
                        <div className="nav-cart-badge">
                            2
                        </div>
                    </Link>
                    <div className="nav-buttons">
                        <Link className="nav-button nav-button-left link" to="/signin">
                            signup
                        </Link>
                        <Link className="nav-button nav-button-right link" to="/signup">
                            signup
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
