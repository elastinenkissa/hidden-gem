import React from 'react';
import { StyleSheet } from 'react-native';
import View from '../../custom/View';
import { theme } from '../../theme';
import { useSelector } from 'react-redux';
import { ThemeState } from '../../util/types/theme';
import Button from '../../custom/Button';

interface ShadowStyle {
  [prop: string]: string;
}

const AppBar: React.FC = () => {
  const currentTheme = useSelector<ThemeState>((state) => state.theme);

  const getShadow = (): ShadowStyle =>
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
    location: { height: 'auto' },
    locationText: {
      fontSize: 18,
    },
  });

  return (
    <View style={styles.container}>
      <Button
        labelStyle={styles.locationText}
        style={styles.location}
        icon="map-marker"
      >
        City
      </Button>
    </View>
  );
};

export default AppBar;
