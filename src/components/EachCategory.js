import React from 'react';

export default function EachCategory(props) {
    return (
        <div className='each-category' 
        onClick={props.handleCatChange}
        onContextMenu={props.handleRightClick}
        id={props.cat.id}
        style={{padding: '0.5rem', 
        backgroundColor: props.location === props.cat.id ? '#dadad0' : 'white', cursor: 'pointer',
        }}>
            {props.cat.categoryName}
        </div>
    )
}