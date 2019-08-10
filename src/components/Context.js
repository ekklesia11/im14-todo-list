import React from 'react'

export default function Context(props) {
    return (
        <div className="menu" style={menu} >
            <div 
            className="menu-option" 
            style={menuChange}
            onClick={props.handleContentChange}
            >Change</div>
            <div 
            className="menu-option" 
            style={menuDelete}
            onClick={props.handleDelete}
            >Delete</div>
        </div>
    )
}

const menu = {
    width: '60px',
    height: '55px',
    backgroundColor: 'white',
    boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.2)',
    position: 'fixed',
    left: '0',
    top: '0',
    display: 'none',
}
const menuDelete = {
    fontWeight: '500',
    fontSize: '14px',
    padding: '7px 0 5px 12px',
    cursor: 'pointer',
}
const menuChange = {
    fontWeight: '500',
    fontSize: '14px',
    paddingLeft: '10px',
    paddingTop: '7px',
    cursor: 'pointer',
}