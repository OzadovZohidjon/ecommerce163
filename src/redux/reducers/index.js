import { combineReducers } from 'redux';
import cartProductsReducer from './cartProductsReducer'
import searchTitleReducer from './searchTitleReducer'
import modalReducer from './modalReducer';
import productsReducer from './productsReducer';

const rootReducer = combineReducers({
    products: productsReducer,
    cartProducts: cartProductsReducer,
    searchTitle: searchTitleReducer,
    open: modalReducer
})

export default rootReducer
