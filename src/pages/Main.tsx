import { Navigate, Route, Routes } from 'react-router-native';
import View from '../custom/View';
import AccountSettings from './account/AccountSettings';
import Locales from './locale/Locales';

const Main: React.FC = () => {
  return (
    <View>
      <Routes>
        <Route path="/" element={<Locales />} />
        <Route path="/account" element={<AccountSettings />} />
        <Route path="*" element={<Navigate to={'/'} replace />} />
      </Routes>
    </View>
  );
};

export default Main;
