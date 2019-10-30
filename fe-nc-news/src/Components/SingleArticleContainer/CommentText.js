import React from 'react';

const CommentText = ({ comment }) => {
  return (
    <div className="article-text">
      <p className="article-author-date-text">
        Posted by {comment.author} at {comment.created_at}
      </p>
      <p className="article-body">{comment.body}</p>
    </div>
  );
};

export default CommentText;
