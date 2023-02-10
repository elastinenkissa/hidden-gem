import React from 'react';

import Link from '../shared/Custom/Link';

import { LocaleProps } from '../../util/types/locales';

const Links: React.FC<LocaleProps> = (props) => {
  return (
    <>
      <Link to={`/locales/${props.locale.id}/`}>About</Link>
      <Link to={`/locales/${props.locale.id}/gallery`}>Gallery</Link>
      <Link to={`/locales/${props.locale.id}/reviews`}>Reviews</Link>
      <Link to={`/locales/${props.locale.id}/map`}>Map</Link>
    </>
  ); 
};

export default Links;
