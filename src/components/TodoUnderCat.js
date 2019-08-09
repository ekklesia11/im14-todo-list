import React from 'react'
import EachTodo from './EachTodo'
import AddTodo from './AddTodo'

export default function TodoUnderCat(props) {
    return (
        <div className='todoUnderCat' style={todoUnderCat}>
            {props.categories.map(cat => 
            (cat.categoryName === props.location ? 
                (cat.todos.map((todo, i) => 
            <EachTodo key={i} todo={todo} />)) : []))}
            <AddTodo handleAddTodo={props.handleAddTodo} handleAddTodoByEnter={props.handleAddTodoByEnter}/>
        </div>
    )
}

const todoUnderCat = {
    border: '1px solid blue',
    height: '550px',
    float: 'right',
    width: '69%',
}