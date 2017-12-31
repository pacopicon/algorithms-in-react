import React, { Component } from 'react';
import './styles.css';

// Here is the Stack code = 

class Stack {
  constructor() {
    let list = []
    this.push = (value) => {
      list.push(value)
    }
    this.pop = () => {
      return list.pop()
    }
    this.peek = () => {
      return list[list.length-1]
    }
    this.isEmpty = () => {
      return list.length == 0 ? true : false
    }
    this.clear = () => {
      return list = []
    }
    this.size = () => {
      return list.length
    }
  }
}

let stack = new Stack()


// The variables below are 

let ob = '{'
let cb = '}'

let stackCode =	<code>
									<span>class Stack {ob}
										<br/>
										<span className="il">constructor() {ob}</span>
										<br/>
										<span className="ilil">list = []</span>
										<br/>
										<span className="ilil">this.push = (value) => {ob}</span>
										<br/>
										<span className="ililil">list.push(value)</span>
										<br/>
										<span className="ilil">{cb}</span>
										<br/>
										<span className="ilil">this.pop = () => {ob}</span>
										<br/>
										<span className="ililil">return list.pop()</span>
										<br/>
										<span className="ilil">{cb}</span>
										<br/>
										<span className="ilil">this.peek = () => {ob}</span>
										<br/>
										<span className="ililil">return list[list.length-1]</span>
										<br/>
										<span className="ilil">{cb}</span>
										<br/>
										<span className="ilil">this.isEmpty = () => {ob}</span>
										<br/>
										<span className="ililil">return list.length == 0 ? true : false</span>
										<br/>
										<span className="ilil">{cb}</span>
										<br/>
										<span className="ilil">this.clear = () => {ob}</span>
										<br/>
										<span className="ililil">return list = []</span>
										<br/>
										<span className="ilil">{cb}</span>
										<br/>
										<span className="ilil">this.size = () => {ob}</span>
										<br/>
										<span className="ililil">return list.length</span>
										<br/>
										<span className="ilil">{cb}</span>
										<br/>
										<span className="il">{cb}</span>
										<br/>
										{cb}
									</span>
								</code>

class StackCode extends Component {

  render() {
    return (
      <div className="StackCode">
      	<p>(3) Stack:</p>
      	<pre className="il alert alert-success">
      		{stackCode}
      		<br/>
      		<br/>
	      	<code>
	      		stack.isEmpty() 
		      	<br/><span className="ilil">// {stack.isEmpty() == true ? 'true' : 'false'}</span><br/>
		      	stack.push(1) 
		      	<br/><span className="ilil">// {typeof stack.push(1)}</span><br/>
		      	stack.isEmpty() 
		      	<br/><span className="ilil">// {stack.isEmpty() == true ? 'true' : 'false'}</span><br/>
		      	stack.peek() 
		      	<br/><span className="ilil">// {stack.peek()}</span><br/>
		      	stack.push("two") 
		      	<br/><span className="ilil">// {typeof stack.push("two")}</span><br/>
		      	stack.peek() 
		      	<br/><span className="ilil">// "{stack.peek()}"</span><br/>
		      	stack.push(true) 
		      	<br/><span className="ilil">// {typeof stack.push(true)}</span><br/>
		      	stack.peek() 
		      	<br/><span className="ilil">// {stack.peek() == true ? 'true' : 'undefined'}</span><br/>
		      	stack.pop() 
		      	<br/><span className="ilil">// {stack.pop() == true ? 'true' : 'undefined'}</span><br/>
		      	stack.peek() 
		      	<br/><span className="ilil">// "{stack.peek()}"</span><br/>
		      	stack.pop() 
		      	<br/><span className="ilil">// "{stack.pop()}"</span><br/>
		      	stack.peek() 
		      	<br/><span className="ilil">// {stack.peek()}</span><br/>
		      	stack.pop() 
		      	<br/><span className="ilil">// {stack.pop()}</span><br/>
		      	stack.peek() 
		      	<br/><span className="ilil">// {typeof stack.peek()}</span><br/>
		      	stack.isEmpty() 
		      	<br/><span className="ilil">// {stack.isEmpty() == true ? 'true' : 'false'}</span><br/>
		      	stack.push("hi") 
		      	<br/><span className="ilil">// {typeof stack.push("hi")}</span><br/>
		      	stack.peek() 
		      	<br/><span className="ilil">// "{stack.peek()}"</span><br/>
		      	stack.clear() 
		      	<br/><span className="ilil">// {Array.isArray(stack.clear()) ? '[]' : 'undefined'}</span><br/>
		      	stack.isEmpty() 
		      	<br/><span className="ilil">// {stack.isEmpty() == true ? 'true' : 'false'}</span>
	      	</code>
      	</pre>
      </div>
    );
  }
}

export default StackCode;
