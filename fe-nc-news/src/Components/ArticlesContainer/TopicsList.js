import React from 'react';
import TopicCard from './TopicCard';
import { Link } from '@reach/router';
import LoadingIndicator from '../LoadingIndicator';
import * as api from '../../api';
import ErrorPage from '../ErrorPage';

class TopicsList extends React.Component {
  state = {
    topics: [],
    isLoading: true,
    err: null
  };
  render() {
    const { topics, isLoading, err } = this.state;
    if (isLoading) return <LoadingIndicator />;
    if (err) return <ErrorPage err={err} />;
    return (
      <section className="topics-list">
        <h2>Topics</h2>
        <ul className="no-padding no-margin">
          {topics.map(topic => (
            <Link
              className="link"
              to={`/topics/${topic.slug}`}
              key={topic.slug}
            >
              <TopicCard topic={topic} />
            </Link>
          ))}
        </ul>
      </section>
    );
  }

  componentDidMount() {
    this.fetchTopics();
  }

  fetchTopics = () => {
    console.log('Fetching topics...');
    api.getTopics().then(topics => {
      this.setState({ topics: topics, isLoading: false }).catch(err =>
        this.setState({
          err: { status: err.response.status, msg: err.response.data.msg },
          isLoading: false
        })
      );
    });
  };
}

export default TopicsList;
