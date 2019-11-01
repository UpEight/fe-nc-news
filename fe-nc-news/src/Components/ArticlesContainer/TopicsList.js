import React from 'react';
import TopicCard from './TopicCard';
import { Link } from '@reach/router';
import LoadingIndicator from '../LoadingIndicator';
import * as api from '../../api';

class TopicsList extends React.Component {
  state = {
    topics: [],
    isLoading: true
  };
  render() {
    const { topics, isLoading } = this.state;
    if (isLoading) return <LoadingIndicator />;
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
    api.getTopics().then(topics => {
      this.setState({ topics: topics, isLoading: false });
    });
  };
}

export default TopicsList;
