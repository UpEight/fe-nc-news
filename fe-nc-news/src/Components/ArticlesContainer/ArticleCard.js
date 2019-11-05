import React from 'react';
import TruncatedArticleText from './TruncatedArticleText';
import Voter from '../Voter';

const ArticleCard = ({ article }) => {
  return (
    <section className="article article-margin">
      <TruncatedArticleText article={article} />
      <Voter
        articleType="articles"
        postId={article.article_id}
        votes={article.votes}
      />
    </section>
  );
};

export default ArticleCard;
