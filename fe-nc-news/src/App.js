import React from 'react';
import './App.css';
import Header from './Components/Header';
import ArticlesContainer from './Components/ArticlesContainer/ArticlesContainer';
import { Router } from '@reach/router';
import SingleArticleContainer from './Components/SingleArticleContainer/SingleArticleContainer';
import ErrorPage from './Components/ErrorPage';

class App extends React.Component {
  state = {
    loggedInUser: 'jessjelly'
  };
  render() {
    const { loggedInUser } = this.state;
    return (
      <div className="App">
        <Header loggedInUser={loggedInUser} />
        <Router>
          <ErrorPage default />
          <ArticlesContainer path="/" />
          <ArticlesContainer path="/articles" />
          <ArticlesContainer path="/topics/:topic_slug" />
          <SingleArticleContainer
            path="/articles/:article_id"
            loggedInUser={loggedInUser}
          />
        </Router>
      </div>
    );
  }
}

export default App;
