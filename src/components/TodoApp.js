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


    render() {
        return (
            <div className="todoApp">
                <AddTodo submitHandler={this.submitHandler} />
                <TodoList todos={this.state.todos} />
            </div>
        );
    }
}

