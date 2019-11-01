import React from 'react';

const ArticleText = ({ article }) => {
  const formattedDate = new Date(article.created_at);
  return (
    <div className="article-text">
      <p className="article-topic-header">{article.topic}</p>
      <p className="article-author-date-text">
        Posted by {article.author} | {formattedDate.toString()}
      </p>

      <p className="article-title-text">{article.title}</p>
      <p className="article-body">{article.body}</p>
      <p className="article-comment-count">Comments: {article.comment_count}</p>
    </div>
  );
};

export default ArticleText;
