import React from 'react';

export default function AddCat(props) {
    return (
        <div className='add-categories' style={addCat}>
            <input type='text' value={props.categoryInput}
            onKeyPress={props.handleAddCatByEnter} 
            onChange={props.catInputBring}
            style={addCatInput}/>
            <button 
            onClick={props.handleAddCat} 
            style={addCatBtn}>
            Add List</button>
        </div>
    )
}

const addCat = {
    position: 'absolute',
    bottom: '0',
    width: '100%',
}
const addCatBtn = {
    marginLeft: '4px', 
    fontFamily: 'Gaegu', 
    fontWeight: 'bold',
    fontSize: '0.8rem',
    position: 'absolute', 
    bottom: '1px',
    backgroundColor: '#bc9e82',
    outline: 'none',
    height: '1.6rem'
}
const addCatInput = {
    width: '48%',
    marginLeft: '4px', 
    border: '1px solid #bc9e82', 
    outline: 'none', 
    height: '1.5rem',
    fontSize: '1rem'
}