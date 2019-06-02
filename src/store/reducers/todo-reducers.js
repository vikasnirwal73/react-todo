
const initialState = [];


const todoReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'ADD_TODO':
            return [...state, payload]
        case 'REMOVE_TODO':
            return state.filter(todo => {
                return todo.id !== payload
            })
        default:
            return state;
    }
}

export default todoReducer;