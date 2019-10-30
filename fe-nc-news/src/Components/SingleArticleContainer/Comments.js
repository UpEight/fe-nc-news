import React from 'react';
import CommentsList from './CommentsList';
import * as api from '../../api';
import LoadingIndicator from '../LoadingIndicator';

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
}

export default Comments;
