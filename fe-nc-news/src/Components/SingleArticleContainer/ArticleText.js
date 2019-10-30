import React from 'react';
import { Link } from '@reach/router';

const ArticleText = ({ article }) => {
  return (
    <div className="article-text">
      <Link to={`/topics/${article.topic}`}>
        <p className="article-topic-header">{article.topic}</p>
      </Link>
      <p className="article-author-date-text">
        Posted by {article.author} at {article.created_at}
      </p>
      <p className="article-body">{article.body}</p>
      <p className="article-comment-count">Comments: {article.comment_count}</p>
    </div>
  );
};

export default ArticleText;
