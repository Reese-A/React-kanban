import React, { Component } from 'react';
import './App.css';

import Header from '../../components/Header';
import Column from '../../components/Column';
import NewCardForm from '../../containers/NewCardForm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      priorities: [],
      statuses: [],
      cards: [],
      users: []
    }

    this.addNewCard = this.addNewCard.bind(this);
  }

  componentDidMount() {
    this.setState({ title: "React Kanban" })
    const pri = fetch('/priorities');
    const stat = fetch('/status');
    const cards = fetch('/cards');
    const users = fetch('/users');
    Promise.all([pri, stat, cards, users])
      .then((result) => {
        const [pri, stat, cards, users] = result;
        return Promise.all([pri.json(), stat.json(), cards.json(), users.json()])
          .then((result) => {
            const [pri, stat, cards, users] = result;
            this.setState({
              priorities: pri,
              statuses: stat,
              cards: cards,
              users: users
            });
            return console.log(this.state);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  addNewCard(card) {
      this.setState({
        cards: [...this.state.cards, card]
      })
  }

  render() {
    return (
      <div className="App">
        <Header title={this.state.title} />
        <br />
        <div id="contentWrap">
          {this.state.statuses.map(status => {
            return (
              <Column key={status.id}
                statusId={status.id}
                statusName={status.status}
                cards={this.state.cards}
                priorities={this.state.priorities}
              />
            )
          })
          }
        </div>
        <br/>
        <NewCardForm userList={this.state.users} submitHandler={this.addNewCard}/>
      </div>
    );
  }
}

export default App;
