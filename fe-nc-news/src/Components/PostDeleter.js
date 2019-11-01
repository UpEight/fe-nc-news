import React from 'react';

const PostDeleter = ({ commentId, removeComment }) => {
  return (
    <button
      onClick={() => {
        removeComment(commentId);
      }}
      className="post-deleter"
    >
      Delete
    </button>
  );
};

// const handleClick = () => {
//   removeComment(commentId);
// };

export default PostDeleter;
