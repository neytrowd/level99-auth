export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

const initial = {
    userId: '',
    role: ''
}

const authReducer = (state = initial, action) => {
    switch (action.type) {
        case LOGIN: {
            return {
                ...state,
                userId: action.payload.userId,
                role: action.payload.role
            }

        }

        case LOGOUT: {
            return {
                userId: '',
                role: ''
            }
        }

        default:
            return state;
    }
}

export default authReducer;