import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      priorities: [],
      statuses: [],
      cards: [],
    }
  }

  componentDidMount() {
    const pri = fetch('/priorities');
    const stat = fetch('/status');
    const cards = fetch('/cards');
    Promise.all([pri, stat, cards])
    .then((result) => {
      const [pri, stat, cards] = result;
      return Promise.all([pri.json(), stat.json(), cards.json()])
    .then((result) => {
      console.log(result);
      })
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
