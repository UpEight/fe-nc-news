import React from 'react';

const LoggedInUser = ({ loggedInUser }) => {
  return <p className="logged-in-user">Logged in as: {loggedInUser}</p>;
};

export default LoggedInUser;
