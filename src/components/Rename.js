import React from 'react'

export default function Rename(props) {
    return (
        <div className='rename' style={rename}>
            <input type='text' className='renameValue' 
            style={{border: '1px solid #bc9e82', outline: 'none',}}/>
        </div>
    )
}

const rename = {
    boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.2)',
    position: 'fixed',
    left: '0',
    top: '0',
    display: 'none',
}