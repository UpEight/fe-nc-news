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
    if (isLoading) return <LoadingIndicator />;
    if (err) return <ErrorPage err={err} />;
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
    console.log('adding comment', commentText);
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
}

export default Comments;
