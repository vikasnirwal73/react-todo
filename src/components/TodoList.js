import React from 'react';
import Todo from './Todo';

export default class TodoList extends React.Component {

    render() {
        return (
            <div className="row my-4">
                <div className="todoList col-md-4 offset-md-4">
                    {
                        this.props.todos.map((todo, index) => {
                            return <Todo todo={todo} key={index} />
                        })
                    }
                </div>
            </div>
        );
    }
}