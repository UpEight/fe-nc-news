import React from 'react';
import ArticleCard from './ArticleCard';

const ArticlesList = ({ articles }) => {
  return (
    <ul className="articles-list no-padding">
      {articles.map(article => (
        <ArticleCard key={article.article_id} article={article} />
      ))}
    </ul>
  );
};

export default ArticlesList;
