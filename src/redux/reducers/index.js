import { combineReducers } from 'redux';
import cartProductsReducer from './cartProductsReducer'
import searchTitleReducer from './searchTitleReducer'
import modalReducer from './modalReducer';
import productsReducer from './productsReducer';
import productReducer from './productReducer';
import categoryReducer from './categoryReducer';

const rootReducer = combineReducers({
    products: productsReducer,
    cartProducts: cartProductsReducer,
    searchTitle: searchTitleReducer,
    open: modalReducer,
    productState: productReducer,
    categoryState: categoryReducer
})

export default rootReducer
