import React from 'react';

const ArticleTextTruncator = props => {
  return (
    <div className="article-body truncate-text fade">{props.children}</div>
  );
};

export default ArticleTextTruncator;
