import React, { useState, useEffect } from 'react';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox/SearchBox';
import Header from '../components/Header/Header.jsx';
import Loading from '../components/Loading';
import Scroll from '../components/Scroll/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import ErrorPage from '../components/ErrorPage';

export default function App() {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [failedToFetch, setFailedToFetch] = useState(false);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setRobots(users))
      .catch(() => setFailedToFetch(true));
  }, []);

  const filteredRobots = robots.length
    ? robots.filter((robot) =>
        robot.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
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
        <SearchBox SearchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}
