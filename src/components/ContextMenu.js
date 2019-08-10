import React from 'react'
import './ContextMenu.css'

export default function ContextMenu(props) {
    return (
        <div className="menu" 
        style={{display: props.contextMenu[0] === 'open' ? 'block' : 'none', left: props.contextMenu[1], top: props.contextMenu[2]}} >
            <div 
            className="menu-change" 
            onClick={props.openFloatingInput}
            >Change</div>
            <div 
            className="menu-delete" 
            onClick={props.handleDelete}
            >Delete</div>
        </div>
    )
}