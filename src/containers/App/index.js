import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import Header from '../../components/Header';

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
    this.setState({ title: "React Kanban" })
    const pri = fetch('/priorities');
    const stat = fetch('/status');
    const cards = fetch('/cards');
    Promise.all([pri, stat, cards])
      .then((result) => {
        const [pri, stat, cards] = result;
        return Promise.all([pri.json(), stat.json(), cards.json()])
          .then((result) => {
            const [pri, stat, cards] = result;
            return this.setState({
              priorities: pri,
              statuses: stat,
              cards: cards
            });
          })
      })
  }

  render() {
    return (
      <div className="App">
      <Header title={this.state.title} />
      </div>

    );
  }
}

export default App;
