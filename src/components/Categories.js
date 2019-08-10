import React from 'react';
import EachCategory from './EachCategory';
import AddCat from './AddCat';

export default function Categories(props) {
    return (
        <div className='categories-list' style={categoriesList}>
            {props.categories.map((cat, i) => 
                <EachCategory key={i} cat={cat} 
                handleCatChange={props.handleCatChange}
                location={props.location}
                handleRightClick={props.handleRightClick}/>)}
            <AddCat 
            categoryInput={props.categoryInput}
            handleAddCat={props.handleAddCat} 
            handleAddCatByEnter={props.handleAddCatByEnter} 
            catInputBring={props.catInputBring} 
            />
        </div>
    )
}

const categoriesList = {
    display: 'inline-block',
    position: 'relative',
    height: 'calc(100vh - 120px)',
    width: '30%',
    marginTop: '3px',
    fontSize: '1.5rem',
}