import React from 'react';
import { Link } from '@reach/router';

const TruncatedArticleText = ({ article }) => {
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
      <Link
        className="link article-text"
        to={`/articles/${article.article_id}`}
      >
        <p className="article-title-text">{article.title}</p>
        <p className="view-full-article-text indicate-link">View article</p>
        <p className="article-body truncate-text fade">{article.body}</p>
        <p className="article-comment-count indicate-link">
          Comments: {article.comment_count}
        </p>
      </Link>
    </section>
  );
};

export default TruncatedArticleText;
