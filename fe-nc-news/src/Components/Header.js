import React from 'react';
import Logo from './Logo';
import LoggedInUser from './LoggedInUser';

const Header = ({ loggedInUser }) => {
  return (
    <header className="header" id="header">
      <Logo />
      <LoggedInUser loggedInUser={loggedInUser} />
    </header>
  );
};

export default Header;
