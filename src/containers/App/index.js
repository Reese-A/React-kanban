import React, { Component } from 'react';
import './App.css';
import Header from '../../components/Header';
import Column from '../../components/Column';

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

            this.setState({
              priorities: pri,
              statuses: stat,
              cards: cards
            });
            return console.log(this.state);
          })
      })
  }

  render() {
    return (
      <div className="App">
        <Header title={this.state.title} />
        {this.state.statuses.map(status => {
          return (
            <Column key={status.id}
                    statusId = {status.id}
                    statusName={status.status}
                    cards={this.state.cards}
            />
          )
        })
        }

      </div>
    );
  }
}

export default App;
