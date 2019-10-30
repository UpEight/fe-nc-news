import React from 'react';
import ArticleText from './ArticleText';
import Voter from './Voter';

const Article = ({ article }) => {
  return (
    <section className="article">
      <ArticleText article={article} />
      <Voter articleId={article._id} votes={article.votes} />
    </section>
  );
};

export default Article;
