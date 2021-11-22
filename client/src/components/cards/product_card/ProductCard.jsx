//npm packages
import { useDispatch } from 'react-redux';

//local import
import "./ProductCard.css";
import { addToCartAction } from '../../../store/actions/cartActions';

/**
 * #CARD ON DASHBOARD PAGE
 */

const ProductCard = ({ product }) => {
    
    /**
     * #ADDING PRODUCT TO CART
     * #SEND AND REQUEST TO SERVER
     */
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(addToCartAction(product));
    }

    return (
        <div className='product-card'>
            <img
                alt='logo img' 
                src={ product.img }
                className="product-card-img"
            />
            <div className="product-info">
                <h4 className="product-info-name"> { product.name }</h4>
                <p className="product-info-description"> { product.description }</p>
                <p className="product-info-price"> { 'R ' + product.price }</p>
                <button className="product-info-btn" onClick={handleClick}>Add To Cart</button>
            </div>
        </div>
    )
}

export default ProductCard;
