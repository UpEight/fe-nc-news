import React from 'react';
import { Link } from '@reach/router';

const ArticleCard = ({ article }) => {
  return (
    <section className="article-card">
      <Link to={`/topics/${article.topic}`}>
        <p className="article-topic-header">{article.topic}</p>
      </Link>
      <p className="article-author-date-text">
        Posted by {article.author} at {article.created_at}
      </p>
      <p className="article-title-text">{article.title}</p>
    </section>
  );
};

export default ArticleCard;
