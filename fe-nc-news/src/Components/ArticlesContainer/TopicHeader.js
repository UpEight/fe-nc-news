import React from 'react';

const TopicHeader = ({ topic }) => {
  return (
    <section className="topic-header">
      <h2 className="topic-title">{topic ? topic : 'All the news'}</h2>
    </section>
  );
};

export default TopicHeader;
