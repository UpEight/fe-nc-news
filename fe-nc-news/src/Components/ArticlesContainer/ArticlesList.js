import React from 'react';
import Article from '../SingleArticleContainer/Article';

const ArticlesList = ({ articles }) => {
  return (
    <ul className="articles-list no-padding">
      {articles.map(article => (
        <Article key={article.article_id} article={article} />
      ))}
    </ul>
  );
};

export default ArticlesList;
