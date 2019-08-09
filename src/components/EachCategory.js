import React from 'react';

export default function EachCategory(props) {
    return (
        <div className='each-category' 
        onClick={props.handleCatChange}>
            {props.cat.categoryName}
        </div>
    )
}
