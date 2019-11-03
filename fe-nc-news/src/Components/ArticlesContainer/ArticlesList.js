import React from 'react';
import Article from '../SingleArticleContainer/Article';
import ArticleMarginWrapper from '../ArticleMarginWrapper';

const ArticlesList = ({ articles, containerType }) => {
  return (
    <ul className="articles-list no-padding">
      {articles.map(article =>
        containerType === 'articles' ? (
          <ArticleMarginWrapper>
            <Article
              key={article.article_id}
              article={article}
              containerType={containerType}
            />
          </ArticleMarginWrapper>
        ) : (
          <Article
            key={article.article_id}
            article={article}
            containerType={containerType}
          />
        )
      )}
    </ul>
  );
};

export default ArticlesList;
