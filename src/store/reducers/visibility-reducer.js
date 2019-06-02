
const visibilityReducer = (state = 'ALL', { type, payload }) => {
    switch (type) {
        case 'CHANGE':
            return payload
        default:
            return state;
    }
}

export default visibilityReducer;