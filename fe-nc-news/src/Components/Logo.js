import React from 'react';
import { Link } from '@reach/router';

const Logo = () => {
  return (
    <Link className="link logo" to="/">
      <h1>NC News</h1>
    </Link>
  );
};

export default Logo;
