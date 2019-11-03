import React from 'react';
import ArticleText from './ArticleText';
import Voter from './Voter';

const Article = ({ article, containerType }) => {
  return (
    <section className="article">
      <ArticleText article={article} containerType={containerType} />
      <Voter
        articleType="articles"
        postId={article.article_id}
        votes={article.votes}
      />
    </section>
  );
};

export default Article;
