import React from 'react';
import CommentsList from './CommentsList';
import * as api from '../../api';
import LoadingIndicator from '../LoadingIndicator';
import CommentAdder from './CommentAdder';
import ErrorPage from '../ErrorPage';

class Comments extends React.Component {
  state = {
    comments: [],
    isLoading: true,
    err: null
  };
  render() {
    const { comments, isLoading, err } = this.state;
    const { loggedInUser } = this.props;
    if (isLoading) return <LoadingIndicator />;
    if (err) return <ErrorPage err={err} />;
    return (
      <section className="comments">
        <CommentAdder addComment={this.addComment} />
        <CommentsList
          comments={comments}
          loggedInUser={loggedInUser}
          removeComment={this.removeComment}
        />
      </section>
    );
  }

  componentDidMount() {
    this.fetchComments();
  }

  componentDidUpdate(prevProps, prevState) {
    const { comments } = this.state;
    if (comments.length !== prevState.comments.length) {
      this.fetchComments();
      this.props.updateCommentCount(comments.length);
    }
  }

  fetchComments() {
    console.log('fetching comments...');
    const { articleId } = this.props;
    api
      .getCommentsByArticleId(articleId)
      .then(comments => this.setState({ comments: comments, isLoading: false }))
      .catch(err =>
        this.setState({
          err: { status: err.response.status, msg: err.response.data.msg },
          isLoading: false
        })
      );
  }

  addComment = commentText => {
    const { loggedInUser, articleId } = this.props;
    api
      .postComment(articleId, loggedInUser, commentText)
      .then(comment =>
        this.setState(currentState => {
          return { comments: [comment, ...currentState.comments] };
        })
      )
      .catch(err =>
        this.setState({
          err: { status: err.response.status, msg: err.response.data.msg },
          isLoading: false
        })
      );
  };

  removeComment = commentId => {
    api
      .deleteComment(commentId)
      .then(this.setState({ comments: [] }))
      .catch(err =>
        this.setState({
          err: { status: err.response.status, msg: err.response.data.msg },
          isLoading: false
        })
      );
  };
}

export default Comments;
