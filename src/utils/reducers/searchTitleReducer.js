function searchTitleReducer(state, action) {
    switch (action.type) {
        case 'search_text':
            state = action.text
            return state

        default:
            return state
    }
}

export default searchTitleReducer
