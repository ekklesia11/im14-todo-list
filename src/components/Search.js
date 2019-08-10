import React from 'react';
import searchImg from '../search.png';

export default function Search(props) {
    return (
        <div className='search' style={search}>
            <img src={searchImg} alt='' style={searchImgStyle}/>
            <input type='text' 
            placeholder='Search' 
            className={'searchInput'} 
            style={searchInput}
            value={props.searchInput}
            onChange={props.handleSearch}
            />
        </div>
    )
}

const search = {
    display: 'inline',
}
const searchImgStyle = {
    width: '0.7rem', 
    padding: '2px 2px 0px 2px', 
    margin: '0 4px',
}
const searchInput = {
    width: '20%', 
    border: '1px solid #bc9e82', 
    outline: 'none',
    height: '1.5rem',
}