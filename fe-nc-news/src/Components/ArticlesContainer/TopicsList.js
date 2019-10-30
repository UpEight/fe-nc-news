import React from 'react';
import TopicCard from './TopicCard';
import { Link } from '@reach/router';

class TopicsList extends React.Component {
  state = {
    topics: [
      {
        slug: 'coding',
        description: 'Code is love, code is life'
      },
      {
        slug: 'football',
        description: 'FOOTIE!'
      },
      {
        slug: 'cooking',
        description: 'Hey good looking, what you got cooking?'
      }
    ]
  };
  render() {
    const { topics } = this.state;
    return (
      <section className="topics-list">
        <h2>Topics</h2>
        <ul className="no-padding no-margin">
          {topics.map(topic => (
            <Link to={`/topics/${topic.slug}`}>
              <TopicCard key={topic.slug} topic={topic} />
            </Link>
          ))}
        </ul>
      </section>
    );
  }
}

export default TopicsList;
