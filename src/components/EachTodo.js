import React from 'react';

export default function EachTodo(props) {
    return (
        <div className='todo' 
        onClick={props.handleDoneTodo} 
        style={{textDecoration: props.todoObj.done ? 'line-through' : 'none', margin: '1rem', cursor: 'pointer', outline: 'none',}}
        id={props.todoObj.id}
        onContextMenu={props.handleRightClick}>
        {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
            <span>✏️</span> {' ' + props.todoObj.todo}
        </div>
    )
}