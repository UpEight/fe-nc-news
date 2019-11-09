import React from 'react';

const ErrorPage = ({ err }) => {
  if (err)
    return (
      <section>
        <h1>Error: {err.status}</h1>
        <h2>{err.msg}</h2>
      </section>
    );
  return <h2>Oops! Page not found :(</h2>;
};

export default ErrorPage;
