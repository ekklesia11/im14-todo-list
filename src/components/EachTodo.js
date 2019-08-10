import React from 'react';

export default function EachTodo(props) {
    return (
        <div className='todo' 
        onClick={props.handleDoneTodo} 
        style={{textDecoration: props.done ? 'line-through' : 'none', margin: '1rem', cursor: 'pointer'}}
        id={props.todoObj.id}>
        {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
            <span>✏️</span> {' ' + props.todoObj.todo}
        </div>
    )
}