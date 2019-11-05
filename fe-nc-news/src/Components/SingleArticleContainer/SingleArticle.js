import React from 'react';
import SingleArticleText from './SingleArticleText';
import Voter from '../Voter';

const SingleArticle = ({ article }) => {
  return (
    <section className="article">
      <SingleArticleText article={article} />
      <Voter
        articleType="articles"
        postId={article.article_id}
        votes={article.votes}
      />
    </section>
  );
};

export default SingleArticle;
