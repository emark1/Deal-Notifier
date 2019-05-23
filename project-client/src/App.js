import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Template } from './components/Template'

class App extends Component {

  constructor() {
    super()

  }

  // populateRedditTest = () => {
  //   let url = 'https://www.reddit.com/r/buildapcsales/new.json?limit=25'
  //   fetch(url)
  //   .then(response => response.json()).then(json => {
  //     console.log(json)
  //   })
  // }

  render() {
    return (
      <div className="App">
        <Template></Template>
      </div>
    );
  }
}

export default App;
