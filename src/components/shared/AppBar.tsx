import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import View from '../../custom/View';
import { theme } from '../../theme';
import { useSelector } from 'react-redux';
import { ThemeState } from '../../util/types/theme';

const AppBar: React.FC = () => {
  const currentTheme = useSelector<ThemeState>((state) => state.theme);

  const getShadow = () =>
    currentTheme === 'dark'
      ? { ...theme.colors.dark.shadow }
      : { ...theme.colors.default.shadow };

  const styles = StyleSheet.create({
    container: {
      height: 80,
      justifyContent: 'center',
      textAlign: 'center',
      ...getShadow(),
    },
  });

  return (
    <View style={styles.container}>
      <Button icon="map-marker">City</Button>
    </View>
  );
};

export default AppBar;
