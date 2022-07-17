const ADD_TO_CART = 'add_to_cart'
const REMOVE_TO_CART = 'remove_to_cart'

function cartProductsReducer(state, action) {
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

            console.log(state)
            return state

        case REMOVE_TO_CART:
            console.log(action)
            state = state.filter((item) => item.id !== action.id)
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
