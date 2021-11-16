import React, { Component } from 'react';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox/SearchBox';
import Header from '../components/Header/Header.jsx';
import Loading from '../components/Loading';
import Scroll from '../components/Scroll/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import ErrorPage from '../components/ErrorPage';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      robots: [],
      searchField: '',
      failedToFetch: false,
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }))
      .catch(() => this.setState({ failedToFetch: true }));
  }

  render() {
    const { robots, searchField, failedToFetch } = this.state;
    const filteredRobots = robots.length
      ? robots.filter((robot) =>
          robot.name
            .toLocaleLowerCase()
            .includes(searchField.toLocaleLowerCase())
        )
      : [];

    if (!robots.length && !failedToFetch) {
      return <Loading />;
    } else if (failedToFetch) {
      return <ErrorPage />;
    } else {
      return (
        <div className="tc">
          <Header />
          <SearchBox SearchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
    }
  }
}
