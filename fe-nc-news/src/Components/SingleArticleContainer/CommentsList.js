import React from 'react';
import CommentCard from './CommentCard';

const CommentsList = ({ comments }) => {
  return (
    <ul className="comments-list no-padding no-margin">
      {comments.map(comment => (
        <CommentCard key={comment.comment_id} comment={comment} />
      ))}
    </ul>
  );
};

export default CommentsList;
