import { Link } from "react-router-dom";
import Cart from "./Cart";

function Header() {
    return (
        <div>
            <p>Header</p>
            <Link to='/'>HOME</Link>
            <h2>cart</h2>
            <Cart/>
            {/* Visa/göm shopping cart */}
        </div>
    )
}

export default Header;