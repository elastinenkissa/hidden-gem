import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './store';
import Main from './src/pages/Main';
import AppBar from './src/components/shared/AppBar';
import NavBar from './src/components/shared/NavBar';
import { StyleSheet, useColorScheme } from 'react-native';
import View from './src/custom/View';
import { NativeRouter } from 'react-router-native';
import { ThemeState } from "./src/util/types/theme";
import { theme } from './src/theme';
import { setTheme } from './src/util/reducers/themeReducer';
import Constants from 'expo-constants';

const Layout: React.FC = () => {
  const currentTheme = useSelector<ThemeState>((state) => state.theme);

  const styles = StyleSheet.create({
    container: {
      backgroundColor:
        currentTheme === 'dark'
          ? theme.colors.dark.background.secondary
          : theme.colors.default.background.secondary,
      justifyContent: 'space-between',
      height: '100%',
      paddingTop: Constants.statusBarHeight,
    },
    navbar: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
    },
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
