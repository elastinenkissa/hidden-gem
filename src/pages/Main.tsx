import React from 'react';
import { Navigate, Route, Routes } from 'react-router-native';

import View from '../components/shared/Custom/View';
import AccountSettings from './account/AccountSettings';
import Locales from './locale/Locales';
import LocaleView from './locale/LocaleView';

const Main: React.FC = () => {
  return (
    <View>
      <Routes>
        <Route path="/" element={<Locales />} />
        <Route path="/account" element={<AccountSettings />} />
        <Route path="/locales/:id/*" element={<LocaleView />} />
        <Route path="*" element={<Navigate to={'/'} replace />} />
      </Routes>
    </View>
  );
};

export default Main;
 