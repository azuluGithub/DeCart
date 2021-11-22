//local imports
import "./Products.css";
import ProductCard from "../../components/cards/product_card/ProductCard";

/**
 * #MAP THROUGH ALL PRODUCTS INORDER TO DISPLAY IN CARDS
 */
const Products = ({ products }) => {

    return (
        <div className='products-list-wrapper'>
            <div className='products-list-box'>
                {
                    products && products.map((product) => {
                        return <div className="product-list-item"  key={product._id}>
                                <ProductCard product={product} />
                            </div>
                        }
                    )
                }
            </div>
        </div>
    )
}

export default Products;