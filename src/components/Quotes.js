import React from 'react'

export default function Quotes(props) {
    return (
        <div className='quoets' style={quotes}>
            {props.quotes.who} said {props.quotes.say}
        </div>
    )
}

const quotes = {
    position: 'fixed',
    left: '2px',
    bottom: '0',
    width: 'calc(100% - 4px)',
    backgroundColor: '#fffff0',
    textAlign: 'center',
    height: '32px',
    paddingTop: '5px',
    fontSize: '1rem',
    borderTop: '1px solid #bc9e82',
}