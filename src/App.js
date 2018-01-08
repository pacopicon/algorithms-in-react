import React, { Component } from 'react'
import './styles.css'
import Closure from './Closure' 
import StackCode from './StackCode'
import Playground from './Playground'

class App extends Component {
	constructor() {
		super()
		this.state = {
			hideBool: true
		}
		this.toggleHide = this.toggleHide.bind(this)
	}

	toggleHide() {
		this.setState({
			hideBool: !this.state.hideBool
		})
	}

  render() {

  	var { hideBool } = this.state

    return (
      <div className="App">
      	<div className="nav">
      		<button className="btn" onClick={this.toggleHide}>{hideBool ? 'Go to Playground' : 'Go to Algorithms'}</button>
      	</div>
      	<div style={{display: hideBool ? 'block' : 'none'}} >
      		<Closure />
        	<StackCode />	
      	</div>
        <div style={{display: hideBool ? 'none' : 'block'}} >
        	<Playground />	
        </div>
      </div>
    );
  }
}

export default App;
