const SEARCH_TEXT = 'search_text'

function searchTitleReducer(state, action) {
    switch (action.type) {
        case SEARCH_TEXT:
            state = action.text
            return state

        default:
            return state
    }
}

export default searchTitleReducer

export function searchTextAC(text) {
    return {
        type: SEARCH_TEXT,
        text: text,
    }
}
