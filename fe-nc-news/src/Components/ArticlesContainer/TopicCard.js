import React from 'react';

const TopicCard = ({ topic }) => {
  return (
    <section className="topic-card">
      <h4>{topic.slug}</h4>
    </section>
  );
};

export default TopicCard;
