import { Link } from "react-router-dom";

function ProductCard() {
    return(
        <div>
            <p>This is a product card</p>
            <Link to='/product'>go to product page</Link>
            {/* Mall för produktkort med props */}
            <h1>(+)</h1>
        </div>
    )
}

export default ProductCard;