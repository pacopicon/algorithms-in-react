import React, { Component } from 'react';
import './styles.css';

// Here is the pre-ES6 code for Queue = 

function Queue() {
  var items = []
  this.enqueue = function(el) {
    items.push(el)
  }
  this.dequeue = function() {
    return items.shift()
  }
  this.front = function() {
    return items[0]
  }
  this.isEmpty = function() {
    return items.length == 0
  }
  this.size = function() {
    return items.length
  }
}

function PriorityQueue() { 
  let items = []
  function QE (element, priority){ 
    this.element = element
    this.priority = priority
  } 
  this.enQ = function(e,p){ 
    let queueElement = new QE(e,p)
    let added = false 
    for (let i = 0; i < items.length; i++){ if (queueElement.priority < items[i].priority){
        items.splice(i, 0, queueElement) 
        added = true
        break
      } 
    }

    if (!added){ 
      items.push(queueElement)  
    } 
  }
  this.deQ = function() {
    return items.shift()
  }
  this.front = function() {
    return items[0]
  }
  this.isEmpty = function() {
    return items.length == 0
  }
  this.size = function() {
    return items.length
  }
  this.print = function(){ 
    for (let i = 0; i < items.length; i++){ console.log(`${ items[ i]. element} - ${ items[ i]. priority}`)
    } 
  };  
}

// Here is the ES6 code for Queue = 

class Queue {
  constructor() {
    this.items = []
  }
  enQ(el) {
    this.items.push(el)
  }
  deQ() {
    return this.items.shift()
  }
  front() {
    return this.items[0]
  }
  isEmpty() {
    return this.items.length == 0
  }
  size() {
    return this.items.length
  }
}

let Queue2 = (function() {
  const items = new WeakMap()
  
  class Queue2 {
    constructor() {
      items.set(this, [])
    }
    enQ(el) {
      let q = items.get(this)
      q.push(el)
    }
    deQ() {
      let q = items.get(this)
      return q.shift()
    }
    front() {
      let q = items.get(this)
      return q[0]
    }
    isEmpty() {
      let q = items.get(this)
      return q.length === 0
    }
    size() {
      let q = items.get(this)
      return q.length
    }
  }
  return Queue2
})()

let queue = new Queue()


// The variables below are 

let ob = '{'
let cb = '}'

let queueCode =	<code>
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

class QueueCode extends Component {

  render() {
    return (
      <div className="QueueCode">
      	<p>(3) Stack:</p>
      	<pre className="il alert alert-success">
      		{queueCode}
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

export default QueueCode;
