import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from './../store/actions';

class AddTodo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            newTodo: ''
        }
    }

    handleChange = (e) => {
        const newTodo = e.target.value;
        this.setState({
            newTodo
        });
    }
    submitHandler = e => {
        e.preventDefault();
        var text = e.target['todoText'].value;
        if(text) {
            this.props.addTodo(text);
        }
    }

    render() {
        return (
            <div className="addTodo">
                <form className="row" onSubmit={this.submitHandler} autoComplete="off">
                    <div className="form-group col-md-8 offset-md-2">
                        <input onChange={this.handleChange} type="text" name="todoText" placeholder="Enter new todo" className="form-control" />
                    </div>
                    <div className="text-center col-md-12">
                        <button className="btn btn-primary">Add Todo</button>
                    </div>
                </form>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        state: state
    }
}
const mapDispatchToProps = dispatch => ({
    addTodo: task => dispatch(addTodo(task))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)