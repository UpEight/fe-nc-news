import React from 'react';
import ArticlesList from './ArticlesList';
import TopicsList from './TopicsList';
import TopicHeader from './TopicHeader';

const ArticlesContainer = () => {
  return (
    <main className="articles-container">
      <TopicHeader />
      <ArticlesList />
      <TopicsList />
    </main>
  );
};

export default ArticlesContainer;
