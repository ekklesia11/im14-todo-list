import React from 'react'

export default function AddTodo(props) {
    return (
        <div className='addTodo' style={addTodo}>
            <input type='text' onKeyPress={props.handleAddTodoByEnter} />
            <input type='button' value='+' onClick={props.handleAddTodo} />
        </div>
    )
}

const addTodo = {
    position: 'relative',
}