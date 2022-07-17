const MODAL_OPEN = 'modal_open'
const MODAL_CLOSE = 'modal_close'

function modalReducer(state, action) {
    switch (action.type) {
        case MODAL_OPEN:
            console.log()
            return true

        case MODAL_CLOSE:
            return false
        default:
            return state
    }
}

export default modalReducer

export function modalOpenAC() {
    return {
        type: MODAL_OPEN,
    }
}

export function modalCloseAC() {
    return {
        type: MODAL_CLOSE,
    }
}
