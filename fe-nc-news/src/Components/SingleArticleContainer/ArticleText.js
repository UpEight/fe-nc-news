import React from 'react';
import { Link } from '@reach/router';
import ArticleTextTruncator from '../ArticleTextTruncator';

const ArticleText = ({ article, containerType }) => {
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

        {containerType === 'articles' ? (
          <>
            <ArticleTextTruncator>{article.body}</ArticleTextTruncator>
            <p className="view-full-article-text indicate-link">
              View full article
            </p>
          </>
        ) : (
          <p className="article-body">{article.body}</p>
        )}
        {containerType === 'articles' ? (
          <p className="article-comment-count indicate-link">
            Comments: {article.comment_count}
          </p>
        ) : (
          <p className="article-comment-count">
            Comments: {article.comment_count}
          </p>
        )}
      </Link>
    </section>
  );
};

export default ArticleText;
