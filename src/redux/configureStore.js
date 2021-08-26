import { createStore } from 'redux';
import rootReducer from './reducers/index'; // '/index' could be omitted but i kept it for clarity



export default function configureStore(initialState) {
    return createStore(rootReducer, initialState);
}