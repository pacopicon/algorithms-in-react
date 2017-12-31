import React, { Component } from 'react'
import './styles.css'
import Closure from './Closure' 
import StackCode from './StackCode'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Closure />
        <StackCode />
      </div>
    );
  }
}

export default App;
