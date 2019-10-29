import React from 'react';
import ArticleCard from './ArticleCard';
import ArticlesSorter from './ArticlesSorter';
import * as api from '../../api';
import LoadingIndicator from '../LoadingIndicator';

class ArticlesList extends React.Component {
  state = {
    articles: [],
    isLoading: true
  };
  render() {
    const { articles, isLoading } = this.state;
    if (isLoading)
      return (
        <>
          <ArticlesSorter />
          <LoadingIndicator />
        </>
      );
    return (
      <>
        <ArticlesSorter />
        <ul className="articles-list no-padding">
          {articles.map(article => (
            <ArticleCard key={article.article_id} article={article} />
          ))}
        </ul>
      </>
    );
  }

  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles = () => {
    console.log('Fetching articles...');
    api
      .getArticles()
      .then(articles => {
        this.setState({ articles: articles, isLoading: false });
      })
      .catch(err => console.log(err));
  };
}

export default ArticlesList;
