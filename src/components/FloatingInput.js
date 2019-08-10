import React from 'react'
import './FloatingInput.css'

export default function FloatingInput(props) {
    return (
        <div className='floatingInput' 
        style={{display: props.floatingInput[0] === 'open' ? 'block' : 'none', left: props.floatingInput[1], top: props.floatingInput[2]}}>
            <input type='text' 
            className='floatingInputValue' 
            onChange={props.floatingInputBring}
            onKeyPress={props.contentsChangeEnter}
            value={props.floatingInput[3]}/>
        </div>
    )
}