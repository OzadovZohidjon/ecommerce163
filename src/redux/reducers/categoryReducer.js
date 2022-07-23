import axios from 'axios'

const SET_CATEGORY = 'set_category'
const SET_LOADING = 'set_loading'


const initialState = {
    categories: [],
    loading: false
}

function categoryReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CATEGORY:
            state = { ...state, categories: action.categories }
            return state
        
        case SET_LOADING:
            state = { ...state, loading: action.loading }
            return state

        default:
            return state
    }
}

export function setCategoryAC(categories) {
    return {
        type: SET_CATEGORY,
        categories: categories
    }
}

export function setLoadingAC(loading) {
    return {
        type: SET_LOADING,
        loading: loading
    }
}

export function getCategories() {
    return async function (dispatch) {
        dispatch(setLoadingAC(true))
        axios.get('https://ecommerce.main-gate.appx.uz/dev/v1/category/list').then(function (response) {
            console.log(response)
            dispatch(setCategoryAC(response.data.categories))
            dispatch(setLoadingAC(false))
        }).catch(function (error) {
            console.log(error)
            dispatch(setLoadingAC(false))
        })
    }
}

export default categoryReducer