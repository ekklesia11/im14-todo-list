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
    console.log('리스트그룹 :')
    console.log('1. 새로운 리스트그룹 추가');
    console.log('2. 원하는 리스트그룹 선택');
    console.log('3. 리스트그룹 이름 변경');
    console.log('4. 리스트그룹 삭제');
    console.log('ToDo목록 :');
    console.log('1. 새로운 todo 추가');
    console.log('2. 리스트그룹별로 정리');
    console.log('3. todo 내용 변경');
    console.log('4. 완료시 crossout');
    console.log('5. todo 삭제');
    console.log('검색 : 구현 중...');
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
