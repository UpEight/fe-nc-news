import React from 'react';

const ArticleCard = ({ article }) => {
  return (
    <section className="article-card">
      <p className="article-topic-header">{article.topic}</p>
      <p className="article-author-date-text">
        Posted by {article.author} at {article.created_at}
      </p>
      <p className="article-title-text">{article.title}</p>
    </section>
  );
};

export default ArticleCard;
