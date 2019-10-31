import React from 'react';
import ArticlesList from './ArticlesList';
import TopicsList from './TopicsList';
import TopicHeader from './TopicHeader';
import * as api from '../../api';
import LoadingIndicator from '../LoadingIndicator';
import ArticlesSorter from './ArticlesSorter';

class ArticlesContainer extends React.Component {
  state = {
    articles: [],
    isLoading: true,
    sort_by: 'created_at',
    order: 'desc'
  };

  render() {
    const { articles, isLoading } = this.state;
    const { topic_slug } = this.props;

    if (isLoading) return <LoadingIndicator />;
    return (
      <main className="articles-container">
        <TopicHeader topic={topic_slug} />
        <ArticlesSorter
          updateSortBy={this.updateSortBy}
          updateSortOrder={this.updateSortOrder}
        />
        <ArticlesList articles={articles} />
        <TopicsList />
      </main>
    );
  }

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    const { topic_slug } = this.props;
    const { sort_by, order } = this.state;
    if (
      topic_slug !== prevProps.topic_slug ||
      sort_by !== prevState.sort_by ||
      order !== prevState.order
    )
      this.fetchArticles();
  }

  fetchArticles = () => {
    console.log('Fetching articles...');
    const { topic_slug } = this.props;
    const { sort_by, order } = this.state;
    api
      .getArticles(topic_slug, sort_by, order)
      .then(articles => {
        this.setState({ articles: articles, isLoading: false });
      })
      .catch(err => console.log(err));
  };

  updateSortBy = event => {
    const sortBy = event.target.value;
    this.setState({ sort_by: sortBy });
  };

  updateSortOrder = event => {
    const orderBy = event.target.value;
    this.setState({ order: orderBy });
  };
}

export default ArticlesContainer;
