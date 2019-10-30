import React from 'react';
import { Link } from '@reach/router';

const ArticleHeader = ({ title }) => {
  return (
    <section className="article-header">
      <h2 className="article-header-title">{title}</h2>
      <Link className="button-close-article" to="/articles">
        <button>Close</button>
      </Link>
    </section>
  );
};

export default ArticleHeader;
