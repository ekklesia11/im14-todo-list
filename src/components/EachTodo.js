import React, { Component } from 'react';

export default class EachTodo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            done: false,
        }
    }

    handleDoneTodo = () => {
        this.setState({
            done: !this.state.done,
        })
    }

    render() {
        return (
            <div className='todo' 
            onClick={this.handleDoneTodo} 
            style={
                {textDecoration: this.state.done ? 'line-through' : 'none'}
                }>
                {this.props.todo}
            </div>
        )
    }
}
