import "./ProductCard.css";

/* # Is card component 
   # used on home/Home.jsx to display products
*/

const ProductCard = ({ product }) => {
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
                <button className="product-info-btn">Add To Cart</button>
            </div>
        </div>
    )
}

export default ProductCard;
