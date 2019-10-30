import React from 'react';
import CommentText from './CommentText';
import Voter from './Voter';

const CommentCard = ({ comment }) => {
  return (
    <section className="article">
      <CommentText comment={comment} />
      <Voter postId={comment.comment_id} votes={comment.votes} />
    </section>
  );
};

export default CommentCard;
