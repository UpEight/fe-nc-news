import React from 'react';
import { Link } from '@reach/router';

const SingleArticleText = ({ article }) => {
  const formattedDate = new Date(article.created_at);
  return (
    <section>
      <section className="article-text">
        <Link
          className="link article-topic-header indicate-link"
          to={`/topics/${article.topic}`}
        >
          <p className="article-topic-header">{article.topic}</p>
        </Link>
        <p className="article-author-date-text">
          Posted by {article.author} | {formattedDate.toString()}
        </p>
      </section>
      <p className="article-title-text">{article.title}</p>
      <p className="article-body">{article.body}</p>
      <p className="article-comment-count">Comments: {article.comment_count}</p>
    </section>
  );
};

export default SingleArticleText;
