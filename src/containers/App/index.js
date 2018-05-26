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

    this.fetchCards = this.fetchCards.bind(this);
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

  fetchCards() {
    return fetch('/cards')
    .then(res => res.json())
    .then((cards) => {
      this.setState({
        cards: cards
      });
    })
  }


  addNewCard(card) {
    return fetch('/cards',
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: card.title,
          priority: card.priority,
          created_by: card.created_by,
          assigned_to: card.assigned_to
        })
      })
      .then(card => card.json())
      .then((card) => {
        console.log(card);
        this.setState({
          cards: [...this.state.cards, card]
        })
      })
  }

  render() {
    return (
      <div className="App">
        <Header title={this.state.title} />
        <br />

        <NewCardForm
          priorities={this.state.priorities}
          users={this.state.users}
          submitHandler={this.addNewCard}
        />
        <br/>

        <div id="contentWrap">
          {this.state.statuses.map(status => {
            return (
              <Column key={status.id}
                statusId={status.id}
                statusName={status.name}
                cards={this.state.cards}
                users={this.state.users}
                priorities={this.state.priorities}
                fetcher={this.fetchCards}
              />
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
