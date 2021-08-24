import { Link } from "react-router-dom";

function ProductCard() {
    return(
        <div>
            <p>This is a product card</p>
            <Link to='/product'>go to product page</Link>
            {/* Skapa produktkort med länk till respektive produktsida */}
        </div>
    )
}

export default ProductCard;