import React from 'react';
import './App.css';
import Header from './Components/Header';
import ArticlesContainer from './Components/ArticlesContainer/ArticlesContainer';
import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <ArticlesContainer path="/" />
        <ArticlesContainer path="/articles" />
        <ArticlesContainer path="/topics/:slug" />
      </Router>
    </div>
  );
}

export default App;
