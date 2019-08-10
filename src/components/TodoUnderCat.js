import React from 'react';
import EachTodo from './EachTodo';
import AddTodo from './AddTodo';
import notebook from '../notebook.png';

export default function TodoUnderCat(props) {
    return (
        <div className='todoUnderCat' style={todoUnderCat}>
            {props.categories.map(cat => 
            (cat.id === props.location ? 
                (cat.todos.map((todoObj, i) => 
            <EachTodo key={i} 
            todoObj={todoObj} 
            handleDoneTodo={props.handleDoneTodo} 
            handleRightClick={props.handleRightClick}/>)) : ''))}
            <AddTodo 
            handleAddTodo={props.handleAddTodo} 
            handleAddTodoByEnter={props.handleAddTodoByEnter}
            />
        </div>
    )
}

const todoUnderCat = {
    float: 'right',
    height: 'calc(100vh - 120px)',
    width: '69%',
    position: 'relative',
    marginTop: '3px',
    backgroundImage: `url(${notebook})`,
    backgroundSize: '40%',
    fontSize: '1.5rem'
}