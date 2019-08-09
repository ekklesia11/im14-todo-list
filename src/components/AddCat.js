import React from 'react'

export default function AddCat(props) {
    return (
        <div className='add-categories'>
            <input type='text' onKeyPress={props.handleAddCatByEnter} />
            <input type='button' value='add' onClick={props.handleAddCat} />
        </div>
    )
}