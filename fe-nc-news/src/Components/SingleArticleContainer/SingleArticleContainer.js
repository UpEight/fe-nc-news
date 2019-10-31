import React from 'react';
import Article from './Article';
import ArticleHeader from './ArticleHeader';
import Comments from './Comments';
import * as api from '../../api';
import LoadingIndicator from '../LoadingIndicator';
import ErrorPage from '../ErrorPage';

class SingleArticleContainer extends React.Component {
  state = {
    article: {},
    isLoading: true,
    err: null
  };

  render() {
    const { article, isLoading, err } = this.state;
    const { loggedInUser } = this.props;
    if (isLoading) return <LoadingIndicator />;
    if (err) return <ErrorPage err={err} />;
    return (
      <main className="single-article-container">
        <ArticleHeader title={article.title} votes={article.votes} />
        <Article article={article} />
        <Comments articleId={article.article_id} loggedInUser={loggedInUser} />
      </main>
    );
  }

  componentDidMount() {
    this.fetchArticle();
  }

  fetchArticle() {
    const { article_id } = this.props;
    api
      .getArticleById(article_id)
      .then(article => this.setState({ article: article, isLoading: false }))
      .catch(err =>
        this.setState({
          err: { status: err.response.status, msg: err.response.data.msg },
          isLoading: false
        })
      );
  }
}

export default SingleArticleContainer;
