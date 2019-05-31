import React from 'react';

export default class AddTodo extends React.Component {

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

    render() {
        return (
            <div className="addTodo">
                <form className="row" onSubmit={this.props.submitHandler} autoComplete="off">
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
