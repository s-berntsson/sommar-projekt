import { combineReducers } from "redux";
import items from './itemReducer';
    //here I am actually importing 'itemReducer', but changing the name to 'items'
    //thanks to the default export I did
import cart from './cartReducer';
import productData from './productReducer';

const rootReducer = combineReducers({
    items: items,
    cart: cart,
    productData: productData
});

export default rootReducer;