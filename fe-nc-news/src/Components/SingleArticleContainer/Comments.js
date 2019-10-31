import React from 'react';
import CommentsList from './CommentsList';
import * as api from '../../api';
import LoadingIndicator from '../LoadingIndicator';
import CommentAdder from './CommentAdder';

class Comments extends React.Component {
  state = {
    comments: [],
    isLoading: true
  };
  render() {
    const { comments, isLoading } = this.state;
    if (isLoading) return <LoadingIndicator />;
    return (
      <section className="comments">
        <CommentAdder addComment={this.addComment} />
        <CommentsList comments={comments} />
      </section>
    );
  }

  componentDidMount() {
    this.fetchComments();
  }

  fetchComments() {
    console.log('fetching comments...');
    const { articleId } = this.props;
    api
      .getCommentsByArticleId(articleId)
      .then(comments =>
        this.setState({ comments: comments, isLoading: false })
      );
  }

  addComment = commentText => {
    const { loggedInUser, articleId } = this.props;
    console.log('adding comment', commentText);
    api.postComment(articleId, loggedInUser, commentText).then(comment =>
      this.setState(currentState => {
        return { comments: [comment, ...currentState.comments] };
      })
    );
  };
}

export default Comments;
