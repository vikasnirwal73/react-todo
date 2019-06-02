import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';


class TodoList extends React.Component {

    render() {

        return (
            
            <div className="row my-4">
                <div className="todoList col-md-4 offset-md-4">
                    {
                        this.props.todos.map((todo) => {
                            return <Todo todo={todo} key={todo.id} />
                        })
                    }
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state, props) => {
    return {
        todos:state.todos
    }
}

export default connect(mapStateToProps)(TodoList);