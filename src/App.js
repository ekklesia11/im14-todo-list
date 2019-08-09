import React, { Component } from 'react'
import Quotes from './components/Quotes'
import ListControlBox from './components/ListControlBox'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      quotes: {
        who: 'Dobby',
        say: 'Hello, master.'
      },
    }
  }
  componentDidMount() {
  //   let quotes;
  //   fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=1')
  //   .then(res => res.json())
  //   .then(quote => {
  //     quotes = {
  //       who: quote[0].character,
  //       say: quote[0].quote,
  //   }
  // })

  //   setTimeout(() => this.setState({
  //     quotes: quotes,
  //   }), 1500)
  }

  render() {
    return (
      <div className='control-center'>
      <div className='title' style={title}>
        <h1 style={{margin: '0'}}>To Do List</h1>
      </div>
        <ListControlBox />
        <Quotes quotes={this.state.quotes}/>
      </div>
    )
  }
}

const title = {
  backgroundColor: '#ffff33',
  position: 'relative',
  top: '0',
  width: '100%',
}

