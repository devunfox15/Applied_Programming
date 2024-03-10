import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

function App() {
  return <h1>hello w3schools</h1>;
}

// hello = (valFn, valLn) => "hello " + valFn + " " + valLn;

// With arrow functions, the this keyword always represents the object that defined the arrow function.
// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------

// With a regular function, this represents the object that called the function:
// class Header {
//   constructor(){
//     this.color = 'red';
//   }
//   changeColor = function() {
//     document.getElementById("demo").innerHTML += this
//   }
// }

// const myheader = new Header();

// window.addEventListener("load", myheader.changeColor);

// document.getElementById("btn").addEventListener("click", myheader.changeColor);

// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------
// with an Arrow example, this represents the Header object no matter who called the funcion
