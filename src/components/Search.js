import React from 'react'

export default function Search() {
    return (
        <div className='search' style={search}>
            <input type='text' defaultValue='Search' />
        </div>
    )
}

const search = {
    display: 'inline'
}