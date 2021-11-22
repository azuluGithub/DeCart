//npm packages
import { useDispatch } from 'react-redux';

//local imports
import "./CartCard.css";
import { deleteCartAction } from '../../../store/actions/cartActions';

/**
 * CARDS THAT DISPLAYS ITEMS ON CART
 */
const CartCard = ({ c, cart }) => {

    /**
     * #SEND REQUEST TO THE DELETE SELECTED PRODUCT
     */
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteCartAction(c.productId, cart));
    }
    
    return (
        <div className="cart-card">
            <table>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Item Price</th>
                    <th>Delete</th>
                </tr>
                <tr>
                    <td><img src={c.product.img} alt='cart img' className="cart-card-img" /></td>
                    <td  className="cart-card-name">{c.product.name}</td>
                    <td className="cart-card-title">{c.product.category.title} </td>
                    <td className="cart-card-description">{c.product.description} </td>
                    <td className="cart-card-price">{"R " + c.product.price} </td>
                    <td>
                        <button className="cart-delete-btn cart-btn" onClick={handleDelete}>Delete</button>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default CartCard;