import React from 'react';
import { connect } from 'react-redux';
import { removeTodo } from './../store/actions';


class Todo extends React.Component {
    handleClick = () => {
        this.props.removeTask(this.props.todo.id);
        console.log(this.props.todo.id);
    }
    render() {
        return (
            <div className="text-left card p-2">
                <div className="clearfix">
                    {this.props.todo.task}
                    <i onClick={this.handleClick} className="pull-right fas fa-times-circle"></i>
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
    removeTask: id => dispatch(removeTodo(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(Todo);