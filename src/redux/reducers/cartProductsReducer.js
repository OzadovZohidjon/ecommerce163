const ADD_TO_CART = 'add_to_cart'
const REMOVE_TO_CART = 'remove_to_cart'
const ADD_ONE = 'add_one'
const REMOVE_ONE = 'remove_one'

const intialState = [];

function cartProductsReducer(state = intialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            let isHave = state.some((item) => item.id === action.item.id)
            state = isHave
                ? state.map((item) =>
                      item.id === action.item.id
                          ? { ...item, qty: item.qty + 1 }
                          : item
                  )
                : [...state, { ...action.item, qty: 1 }]

            return state

        case REMOVE_TO_CART:
            state = state.filter((item) => item.id !== action.id)
            return state

        case ADD_ONE:
            state = state.map(item => item.id === action.id ? {...item, qty: item.qty + 1} : item)
            return state
        
        case REMOVE_ONE:
            state = state.map(item => item.id === action.id ? {...item, qty: item.qty === 1 ? 1 : item.qty - 1} : item)
            return state
        
        default:
            return state
    }
}

export default cartProductsReducer

export function addToCartAC(product) {
    return {
        type: ADD_TO_CART,
        item: product,
    }
}

export function removeToCartAC(id) {
    return {
        type: REMOVE_TO_CART,
        id: id,
    }
}

export function incrementAC(id) {
    return {
        type: ADD_ONE,
        id: id
    }
}

export function decrementAC(id) {
    return {
        type: REMOVE_ONE,
        id: id
    }
}