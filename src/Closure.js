import React, { Component } from 'react';
import './styles.css';

// Here is the Non Closure code = 

let onlyFunc = function() {
	let counter = 0
	return counter+= 1
}


// Here is the Closure = 

let outerFunc = function() {
	let counter = 0

	let innerFunc = function() {
		return counter += 1 		
	}

	return innerFunc
}

let closFunc = outerFunc()

// Fibonacci function = 

let findFibonacci = () => {
  let arr = [1,2]
  
  let calc = () => {
    let el = arr[arr.length-2] + arr[arr.length-1]
    arr.push(el)
    return arr
  }
  return calc
}

let findFib = findFibonacci()


// The variables below are 

let ob = '{'
let cb = '}'

let notClosureCode =	<code>
												<span>let onlyFunc = function() {ob}<br/>
													<span className="il">let counter = 0</span>
													<br/>
													<span className="il">return counter += 1</span>
												</span>
												<br/>
												<span>{cb}</span>
											</code>

let closureCode =		<code>
											<span>let outerFunc = function() {ob}<br/>
												<span className="il">let counter = 0</span>
												<br/>
												<br/>
												<span className="il">let innerFunc = function() {ob}</span>
												<br/>
												<span className="ilil">return counter += 1</span>
												<br/>
												<span className="il">{cb}</span>
												<br/>
												<span className="il">return innerFunc</span>
											</span>
											<br/>
											<span>{cb}</span>
											<br/>
											<br/>
											<span>let closFunc = outerFunc()</span>
											<br/>
											<br/>
											<span>// outerFunc() // innerFunc, <br/>// that is: function() {ob}
											return counter += 1{cb}</span>
										</code>

let fibCode = <code>
								<span>let findFibonacci = () => {ob}<br/>
									<span className="il">let arr = [1,2]</span>
									<br/>
									<br/>
									<span className="il">let calc = () => {ob}</span>
									<br/>
									<span className="ilil">let el = arr[arr.length-2] + arr[arr.length-1]</span>
									<br/>
									<span className="ilil">arr.push(el)</span>
									<br/>
									<span className="ilil">return arr</span>
									<br/>
									<span className="il">{cb}</span>
									<br/>
									<span className="il">return calc</span>
								</span>
								<br/>
								<span>{cb}</span>
								<br/>
								<br/>
								<span>let findFib = findFibonacci()</span>
								<br/>
								<br/>
								<span>// findFibonacci() // calc, 
									<br/>// that is: () => {ob}
									<br/>// <span className="ilililil">let el = arr[arr.length-2] + arr[arr.length-1]</span>
									<br/>// <span className="ilililil">arr.push(el)</span>
									<br/>// <span className="ilililil">return arr</span>
									<br/>// <span className="ililil">{cb}</span>
								</span>
							</code>

class Closure extends Component {

  render() {
    return (
      <div className="Closure">
      	<p className="green">H</p>
      	<p className="red">e</p>
      	<p className="green">l</p>
      	<p className="red">l</p>
      	<p className="green">o </p>
      	<p>Javi!</p>
      	<p>(1) Eliminating Global var without Closure:</p>
      	<pre className="il alert alert-danger">
      		{notClosureCode}
      		<br/>
      		<br/>
	      	<code>onlyFunc() // {onlyFunc()}</code><br/>
	      	<code>onlyFunc() // {onlyFunc()}</code><br/>
	      	<code>onlyFunc() // {onlyFunc()}</code>
      	</pre>
      	<p>(2) Eliminating Global var with Closure:</p>
      	<pre className="il alert alert-success">
      		{closureCode}
      		<br/>
      		<br/>
	      	<code>closFunc() // {closFunc()}</code><br/>
	      	<code>closFunc() // {closFunc()}</code><br/>
	      	<code>closFunc() // {closFunc()}</code>
      	</pre>
      	<p>(3) Fibonacci generator function with Closure:</p>
      	<pre className="il alert alert-success">
      		{fibCode}
      		<br/>
      		<br/>
	      	<code>findFib() // [1,2,3]</code><br/>
	      	<code>findFib() // [1,2,3,5]</code><br/>
	      	<code>findFib() // [1,2,3,5,8]</code>
      	</pre>
      </div>
    );
  }
}

export default Closure;
