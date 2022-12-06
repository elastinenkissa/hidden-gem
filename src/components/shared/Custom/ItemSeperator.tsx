import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';

import { ThemeState } from '../../../util/types/theme';

import { theme } from '../../../theme';

const ItemSeparator: React.FC = () => {
  const currentTheme = useSelector<ThemeState>((state) => state.theme);

  const styles = StyleSheet.create({
    separator: {
      backgroundColor:
        currentTheme === 'dark'
          ? theme.colors.dark.background.secondary
          : theme.colors.default.background.secondary,
      height: 20
    }
  });
  return <View style={styles.separator}></View>;
};

export default ItemSeparator;
