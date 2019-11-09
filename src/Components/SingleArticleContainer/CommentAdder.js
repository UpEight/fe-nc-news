import React from 'react';

class CommentAdder extends React.Component {
  state = {
    commentText: ''
  };
  render() {
    const { commentText } = this.state;
    return (
      <section className="comment-adder">
        <form onSubmit={this.handleSubmit}>
          <textarea
            className="add-comment-text-area"
            name="commentText"
            value={commentText}
            placeholder="Add a comment..."
            onChange={this.handleChange}
            required
          ></textarea>

          <button className="comment-button">Comment</button>
        </form>
      </section>
    );
  }

  handleChange = event => {
    const { value } = event.target;
    this.setState({ commentText: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { addComment } = this.props;
    const { commentText } = this.state;
    addComment(commentText);
    this.setState({ commentText: '' });
  };
}

export default CommentAdder;
