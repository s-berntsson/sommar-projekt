import { Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import ProductGallery from './ProductGallery';
import ProductPage from "./ProductPage";

function MyRouter() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={ProductGallery} />
                {/* Skapa paths för alla produktnamn --- Går detta att automatisera vid klick på produktkort? */}
                <Route exact path='/product' component={ProductPage} />
                <Route exact path='/checkout' component={Checkout} />
            </Switch>
        </div>
    )
}

export default MyRouter;