import React from 'react';
import ArticleCard from './ArticleCard';
import ArticlesSorter from './ArticlesSorter';

const ArticlesList = ({ articles }) => {
  return (
    <>
      <ArticlesSorter />
      <ul className="articles-list no-padding">
        {articles.map(article => (
          <ArticleCard key={article.article_id} article={article} />
        ))}
      </ul>
    </>
  );
};

export default ArticlesList;
