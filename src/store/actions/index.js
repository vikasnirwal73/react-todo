let newId = 0;

export const addTodo = task => ({
    type: 'ADD_TODO',
    payload: {
        task: task,
        done: false,
        id: newId++
    }
});


export const removeTodo = id => ({
    type: 'REMOVE_TODO',
    payload: id
})

