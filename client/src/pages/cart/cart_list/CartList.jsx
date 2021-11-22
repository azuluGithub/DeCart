//local imports
import "./CartList.css";
import CartCard from "../card_card/CartCard";

/**
 * #MAP THROUGH THE CART INORDER TO DISPLAY PRODUCTS IN CARDS
 */
const CartList = ({ cart }) => {

    return (
        <div className='cart-list-wrapper'>
            <div className='cart-list-box'>
                {
                    cart && cart.map((c) => <CartCard c={c} cart={cart} key={c._id} /> )
                }
            </div>
        </div>
    )
}

export default CartList;