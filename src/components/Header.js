import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <p>Header</p>
            <Link to='/'>HOME</Link>
            <h2>cart</h2>
            {/* Funktion som visar/gömmer shopping cart */}
        </div>
    )
}

export default Header;