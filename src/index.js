// Import React & ReactDOM dependencies
import React from 'react';
import  ReactDOM from 'react-dom';
import "./App.css";
import Main from './Main';
// Create a  React Component

const App = () => {

  return (
    <div>
      <Main />
    </div>
  )
}

// Show  Component on screen
ReactDOM.render(<App />, document.querySelector('#root'))
