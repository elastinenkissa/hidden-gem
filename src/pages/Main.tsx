import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import AppBar from '../components/shared/AppBar';
import NavBar from '../components/shared/NavBar';
import View from '../custom/View';
import { useSelector } from 'react-redux';
import { ThemeState } from '../util/types/theme';
import { theme } from '../theme';

const Main: React.FC = () => {
  const currentTheme = useSelector<ThemeState>((state) => state.theme);
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor:
        currentTheme === 'dark'
          ? theme.colors.dark.background.secondary
          : theme.colors.default.background.secondary,
      height: '100%',
      justifyContent: 'space-between',
    },
    navbar: {
      position: 'absolute',
      bottom: 0,
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar />
      <AppBar />
      <NavBar style={styles.navbar} />
    </View>
  );
};

export default Main;
