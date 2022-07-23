import axios from 'axios'

const SET_PRODUCT = 'set_product'
const SET_LOADING = 'set_loading'

const initialState = {
    product: {},
    loading: false
}

function productReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PRODUCT:
            state = { ...state, product: action.product }
            return state
    
        case SET_LOADING:
            state = {...state, loading: action.loading}
            return state
        
        default:
            return state
    }
}

export function setProductAC(product) {
    return {
        type: SET_PRODUCT,
        product: product
    }
}

export function setLoadingAC(loading) {
    return {
        type: SET_LOADING,
        loading: loading
    }
}

export function getProduct(pathname) {
    return async function (dispatch) {
        dispatch(setLoadingAC(true))
        axios.get(`https://ecommerce.main-gate.appx.uz/dev/v1/product/${pathname}`).then(function (response) {
            dispatch(setProductAC(response.data.product))
            dispatch(setLoadingAC(false))
        }).catch(function (error) {
            console.log(error)
            dispatch(setLoadingAC(false))
        })
    }
}

export default productReducer