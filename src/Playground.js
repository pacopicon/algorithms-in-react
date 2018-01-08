import React, { Component } from 'react'
import './styles.css'

class Playground extends Component {
	constructor() {
		super()
		this.state = {
			field: ''
		}
		this.write = this.write.bind(this)
		this.evaluate = this.evaluate.bind(this)
	}

	write(e) {
		e.preventDefault()
		this.setState({
			field: this.text.value
		})
	}

	evaluate(val) {
		var val = eval(val)
		console.log(typeof val)
		if (typeof val == 'function') {
			val()
		}
	}

  render() {
  	var { field } = this.state
    return (
      <div className="Playground">
        <p>Hi this is Playground</p>
        <form onSubmit={ this.write }>
        	<input 
        		type="textarea"
        		placeholder='write code here'
        		className='textarea'
        		ref={input => this.text = input}
        	/>
        	<input className="btn" type="submit" value="submit" />
        </form>
        <div className="console">
        	this.evaluate(field) = { this.evaluate(field) }<br/>
        	"`${field}`" = { `${field}` }
        </div>
      </div>
    );
  }
}

export default Playground;
