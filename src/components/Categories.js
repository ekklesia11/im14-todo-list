import React from 'react'
import EachCategory from './EachCategory'
import AddCat from './AddCat'

export default function Categories(props) {
    return (
        <div className='categories-list' style={categoriesList}>
            {props.categories.map((cat, i) => 
                <EachCategory key={i} cat={cat} handleCatChange={props.handleCatChange}/>)}
            <AddCat handleAddCat={props.handleAddCat} handleAddCatByEnter={props.handleAddCatByEnter}/>
        </div>
    )
}

const categoriesList = {
    border: '1px solid red',
    display: 'inline-block',
    position: 'relative',
    height: '550px',
    width: '30%',
}