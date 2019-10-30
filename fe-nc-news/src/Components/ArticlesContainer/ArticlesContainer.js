import React from 'react';
import ArticlesList from './ArticlesList';
import TopicsList from './TopicsList';
import TopicHeader from './TopicHeader';
import * as api from '../../api';
import LoadingIndicator from '../LoadingIndicator';

class ArticlesContainer extends React.Component {
  state = {
    articles: [],
    isLoading: true
  };

  render() {
    const { articles, isLoading } = this.state;
    if (isLoading) return <LoadingIndicator />;
    return (
      <main className="articles-container">
        <TopicHeader />
        <ArticlesList articles={articles} />
        <TopicsList />
      </main>
    );
  }

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps.topic_slug, '<<<<<prevProps');
    console.log(this.props.topic_slug, 'this.props');
    if (this.props.topic_slug !== prevProps.topic_slug) this.fetchArticles();
  }

  fetchArticles = () => {
    console.log('Fetching articles...');
    const { topic_slug } = this.props;
    api
      .getArticles(topic_slug)
      .then(articles => {
        this.setState({ articles: articles, isLoading: false });
      })
      .catch(err => console.log(err));
  };
}

export default ArticlesContainer;
