import { Navigate, Route, Routes } from 'react-router-native';
import View from '../custom/View';
import AccountSettings from './account/AccountSettings';
import LocaleList from './locale/LocaleList';

const Main: React.FC = () => {
  return (
    <View>
      <Routes>
        <Route path="/" element={<LocaleList />} />
        <Route path="/account" element={<AccountSettings />} />
      </Routes>
    </View>
  );
};

export default Main;
