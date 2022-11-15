import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import AppBar from './src/components/shared/AppBar';
import Text from './src/custom/Text';
import View from './src/custom/View';
import { theme } from './src/theme';

const App: React.FC = () => {
  const [currentTheme, setCurrentTheme] = React.useState<string>('dark');
  const styles = StyleSheet.create({
    container: {
      backgroundColor:
        currentTheme === 'dark' && theme.colors.dark.background.secondary,
      height: '100%',
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar />
      <AppBar />
    </View>
  );
};

export default App;
