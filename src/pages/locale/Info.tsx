import React from 'react';
import { Route, Routes } from 'react-router-native';

import About from '../../components/locale/About';
import Gallery from '../../components/locale/Gallery';
import Map from '../../components/locale/Map';
import Reviews from '../../components/locale/Reviews';

import { LocaleProps } from '../../util/types/locales';

const Info: React.FC<LocaleProps> = (props) => {
  return (
    <Routes>
      <Route path="/" element={<About locale={props.locale} />} />
      <Route path="/gallery" element={<Gallery locale={props.locale} />} />
      <Route path="/gallery" element={<Reviews locale={props.locale} />} />
      <Route path="/gallery" element={<Map />} />
    </Routes>
  );
};

export default Info;
