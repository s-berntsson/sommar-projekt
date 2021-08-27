import { createStore, compose } from 'redux';
import rootReducer from './reducers/index'; // '/index' could be omitted but i kept it for clarity



export default function configureStore(initialState) {
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;  //enabling redux devtools

    return createStore(rootReducer, initialState, composeEnhancers());
}