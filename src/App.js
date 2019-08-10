import React, { Component } from 'react';
import Quotes from './components/Quotes';
import ListControlBox from './components/ListControlBox';
import './App.css';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      quotes: {
        who: 'Dobby',
        say: '"Hello, master." © 2019'
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
    console.group('Simple To Do Methods')
    console.log(
      'C',
      'R',
      'U',
      'D',
    )
    console.groupEnd()
    return (
      <div className='control-center'>
      <div className='title' style={title}>
        <h1 style={{margin: '0', marginLeft: '10px'}}>Simple To Do List</h1>
      </div>
        <ListControlBox />
        <Quotes quotes={this.state.quotes}/>
      </div>
    )
  }
}

const title = {
  backgroundColor: '#fffff0',
  position: 'relative',
  top: '1px',
  left: '2px',
  width: 'calc(100% - 4px)',
  borderBottom: '1px solid #bc9e82',
  marginBottom: '5px'
}
