import React from 'react';
import { Link } from '@reach/router';

const TopicCard = ({ topic }) => {
  return (
    <Link className="link" to={`/topics/${topic.slug}`}>
      <section className="topic-card">
        <h4>{topic.slug}</h4>
      </section>
    </Link>
  );
};

export default TopicCard;
