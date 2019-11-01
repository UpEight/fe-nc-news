import React from 'react';
import { Link } from '@reach/router';

const Logo = () => {
  return (
    <Link className="link" to="/">
      <section className="logo no-margin">
        <p className="logo-title">
          Tidder{' '}
          <span className="logo-text">...the back page of the internet</span>
        </p>
      </section>
    </Link>
  );
};

export default Logo;
