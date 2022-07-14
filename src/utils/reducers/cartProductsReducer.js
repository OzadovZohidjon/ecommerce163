function cartProductsReducer(state, action) {
    switch (action.type) {
        case 'add_to_cart':
            console.log(action)
            state = [...state, { ...action.item, qty: 1 }]
            return state

        case 'remove_to_cart':
            console.log(action)
            state = state.filter((item) => item.id !== action.id)
            return state

        default:
            return state
    }
}

export default cartProductsReducer
