import React from 'react';
import CommentText from './CommentText';
import Voter from '../Voter';
import PostDeleter from '../PostDeleter';

const CommentCard = ({ comment, loggedInUser, removeComment }) => {
  return (
    <section className="article">
      {loggedInUser === comment.author && (
        <PostDeleter
          commentId={comment.comment_id}
          removeComment={removeComment}
        />
      )}
      <CommentText comment={comment} />
      <Voter
        commentType="comments"
        postId={comment.comment_id}
        votes={comment.votes}
      />
    </section>
  );
};

export default CommentCard;
