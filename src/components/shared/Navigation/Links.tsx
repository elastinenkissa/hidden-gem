import React from 'react';
import Link from '../Custom/Link';

const Links: React.FC = () => {
  return (
    <>
      <Link to="/" icon="home" />
      <Link to="new" icon="plus" />
      <Link to="/account" icon="account" />
    </>
  );
};

export default Links;
 