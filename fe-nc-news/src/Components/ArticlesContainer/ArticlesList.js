import React from 'react';
import Article from '../SingleArticleContainer/Article';
import { Link } from '@reach/router';

const ArticlesList = ({ articles }) => {
  return (
    <ul className="articles-list no-padding">
      {articles.map(article => (
        <Link
          class="link"
          to={`/articles/${article.article_id}`}
          key={article.article_id}
        >
          <Article article={article} />
        </Link>
      ))}
    </ul>
  );
};

export default ArticlesList;
