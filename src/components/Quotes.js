import React from 'react'

export default function Quotes(props) {
    return (
        <div className='quoets' style={quotes}>
            {props.quotes.who} said "{props.quotes.say}"
        </div>
    )
}

const quotes = {
    position: 'fixed',
    bottom: '0',
    width: '100%',
    backgroundColor: 'darkblue',
    color: '#f0ffff',
    textAlign: 'center',
    height: '30px',
    paddingTop: '10px',
    fontSize: '0.7rem',
}