import React from 'react';
import { Link } from '@reach/router';

const ArticleCard = ({ article }) => {
  return (
    <Link to={`/articles/${article.article_id}`}>
      <section className="article-card">
        <p className="article-topic-header">{article.topic}</p>
        <p className="article-author-date-text">
          Posted by {article.author} at {article.created_at}
        </p>
        <p className="article-title-text">{article.title}</p>
      </section>
    </Link>
  );
};

export default ArticleCard;
