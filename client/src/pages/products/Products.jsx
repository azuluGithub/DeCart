import "./Products.css";
import { fakeProducts } from "../../fakeData";
import ProductCard from "../../components/cards/product_card/ProductCard";
/*
   # displays all products
*/
const Products = () => {
    return (
        <div className='products-list-wrapper'>
            <div className='products-list-box'>
                {
                    fakeProducts.map((product) => {
                    return <div className="product-list-item">
                                <ProductCard key={product._id} product={product} />
                            </div>
                        }
                    )
                }
            </div>
        </div>
    )
}

export default Products;