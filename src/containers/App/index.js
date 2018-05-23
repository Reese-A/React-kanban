import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      cards: [],
    }
  }

  componentDidMount() {
    fetch('/priorities')
    .then(priorities => priorities.json())
    .then((result) => {
      console.log(result);
      
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>

    );
  }
}

export default App;
