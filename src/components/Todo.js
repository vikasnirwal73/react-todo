import React from 'react';

export default class Todo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="text-left card p-2">
                <div className="clearfix">
                    {this.props.todo.task}
                    <i className="pull-right fas fa-times-circle"></i>
                </div>

            </div>
        );
    }
}