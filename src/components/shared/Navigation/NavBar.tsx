import React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import View from '../Custom/View';

import { Style } from '../../../util/types/props';
import { ThemeState } from '../../../util/types/theme';

import { theme } from '../../../theme';
import Links from './Links';

interface Props {
  style?: Style;
}

const NavBar: React.FC<Props> = () => {
  const currentTheme = useSelector<ThemeState>((state) => state.theme);

  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      borderTopColor:
        currentTheme === 'dark'
          ? theme.colors.dark.border.color
          : theme.colors.default.border.color,
      borderTopWidth: theme.dimensions.navigation.borderWidth,
      flexDirection: 'row',
      height: theme.dimensions.navigation.height,
      justifyContent: 'space-evenly'
    }
  });

  return (
    <View style={styles.container}>
      <Links />
    </View>
  );
};

export default NavBar;
