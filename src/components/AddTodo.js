import React from 'react';

export default function AddTodo(props) {
    return (
        <div className='addTodo' style={addTodo}>
            <input type='text' value={props.todoInput}
            onKeyPress={props.handleAddTodoByEnter} 
            onChange={props.todoInputBring}
            style={addTodoInput}/>
            <button 
            onClick={props.handleAddTodo} 
            style={addTodoBtn}>+</button>
        </div>
    )
}

const addTodo = {
    position: 'absolute',
    bottom: '0',
    width: '100%'
}
const addTodoBtn = {
    width: '35px',
    marginLeft: '4px',
    fontWeight: 'bolder',
    fontSize: '1rem',
    position: 'absolute',
    bottom: '1px',
    backgroundColor: '#bc9e82',
    outline: 'none',
    height: '1.6rem',
}
const addTodoInput = {
    width: '85%', 
    marginLeft: '4px', 
    border: '1px solid #bc9e82', 
    outline: 'none', 
    height: '1.5rem'
}