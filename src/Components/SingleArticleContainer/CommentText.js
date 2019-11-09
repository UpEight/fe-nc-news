import React from 'react';

const CommentText = ({ comment }) => {
  const formattedDate = new Date(comment.created_at);

  return (
    <div className="article-text">
      <p className="article-author-date-text">
        Posted by {comment.author} | {formattedDate.toString()}
      </p>
      <p className="article-body">{comment.body}</p>
    </div>
  );
};

export default CommentText;
