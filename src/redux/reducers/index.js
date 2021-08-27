import { combineReducers } from "redux";
import cart from './cartReducer';
import productData from './productReducer';

const rootReducer = combineReducers({
    cart: cart,
    productData: productData
});

export default rootReducer;