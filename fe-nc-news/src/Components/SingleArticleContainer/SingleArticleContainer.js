import React from 'react';
import Article from './Article';
import ArticleHeader from './ArticleHeader';
import Comments from './Comments';
import * as api from '../../api';
import LoadingIndicator from '../LoadingIndicator';

class SingleArticleContainer extends React.Component {
  state = {
    article: {},
    isLoading: true
  };

  render() {
    const { article, isLoading } = this.state;
    const { loggedInUser } = this.props;
    if (isLoading) return <LoadingIndicator />;
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
      .then(article => this.setState({ article: article, isLoading: false }));
  }
}

export default SingleArticleContainer;
