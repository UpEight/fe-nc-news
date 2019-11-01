import React from 'react';
import ArticleText from './ArticleText';
import Voter from './Voter';
import { Link } from '@reach/router';

const Article = ({ article }) => {
  return (
    <section className="article">
      <Link className="link" to={`/articles/${article.article_id}`}>
        <ArticleText article={article} />
      </Link>
      <Voter
        articleType="articles"
        postId={article.article_id}
        votes={article.votes}
      />
    </section>
  );
};

export default Article;
