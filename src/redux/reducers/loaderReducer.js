export const SHOW_LOADER = 'OPEN';
export const HIDE_LOADER = 'CLOSE';

const initial = {
    open: false
}

const loaderReducer = (state = initial, action) => {
    switch (action.type) {
        case SHOW_LOADER: {
            return {
                open: true
            }
        }
        case HIDE_LOADER: {
            return {
                open: false
            }
        }

        default:
            return state
    }
}

export default loaderReducer;