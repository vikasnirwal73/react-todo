import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';


export default class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
    }

    submitHandler = (e) => {
        e.preventDefault();
        const newTodoText = e.target['todoText'].value;

        if (newTodoText) {
            this.setState((prevState) => {
                console.log(prevState);
                return {
                    todos: [
                        ...prevState.todos,
                        {
                            task: newTodoText,
                            done: false
                        }]
                }
            })
        }
    }

    render() {
        return (
            <div className="todoApp">
                <AddTodo submitHandler={this.submitHandler} />
                <TodoList todos={this.state.todos} />
            </div>
        );
    }
}

