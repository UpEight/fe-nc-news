import React from 'react';
import CommentCard from './CommentCard';

const CommentsList = ({ comments, loggedInUser, removeComment }) => {
  return (
    <ul className="comments-list no-padding no-margin">
      {comments.map(comment => (
        <CommentCard
          key={comment.comment_id}
          comment={comment}
          loggedInUser={loggedInUser}
          removeComment={removeComment}
        />
      ))}
    </ul>
  );
};

export default CommentsList;
