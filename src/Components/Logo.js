import React from 'react';
import { Link } from '@reach/router';

import logo from '../media/Gadget_Brain.jpg';

const Logo = () => {
  return (
    <Link className="link" to="/">
      <section className="logo no-margin">
        <img
          src={logo}
          className="logo-image"
          id="logo"
          alt="logo-brain-from-inspector-gadget"
        ></img>
        <p className="logo-title" id="logo-title">
          Tidder
        </p>
        <p className="logo-text" id="logo-text">
          ...the back page of the internet
        </p>
      </section>
    </Link>
  );
};

export default Logo;
