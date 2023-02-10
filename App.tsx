import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import Constants from 'expo-constants';
import { StyleSheet, useColorScheme } from 'react-native';
import { NativeRouter } from 'react-router-native';

import Main from './src/pages/Main';
import AppBar from './src/components/shared/Navigation/AppBar';
import NavBar from './src/components/shared/Navigation/NavBar';
import View from './src/components/shared/Custom/View';

import { ThemeState } from './src/util/types/theme';
import { setTheme } from './src/util/reducers/themeReducer';
import store from './store';

import { theme } from './src/theme';

const Layout: React.FC = () => {
  const currentTheme = useSelector<ThemeState>((state) => state.theme);

  const styles = StyleSheet.create({
    container: {
      backgroundColor:
        currentTheme === 'dark'
          ? theme.colors.dark.background.secondary
          : theme.colors.default.background.secondary,
      height: '100%',
      justifyContent: 'space-between',
      paddingTop: Constants.statusBarHeight
    },
    navbar: {
      bottom: 0,
      position: 'absolute',
      width: '100%'
    }
  });

  const dispatch = useDispatch();

  const identifiedTheme = useColorScheme() as string;

  React.useEffect(() => {
    dispatch(setTheme(identifiedTheme));
  }, []);
 
  return (
    <View style={styles.container}>
      <View>
        <AppBar />
        <Main />
      </View>
      <View style={styles.navbar}>
        <NavBar />
      </View>
    </View>
  );
};

const App: React.FC = () => {
  return (
    <NativeRouter>
      <Provider store={store}>
        <Layout />
      </Provider>
    </NativeRouter>
  );
};

export default App;
