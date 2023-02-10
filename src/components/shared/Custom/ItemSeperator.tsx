import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';

import { ThemeState } from '../../../util/types/theme';

import { theme } from '../../../theme';
import { Style } from '../../../util/types/props';

interface Props {
  style?: Style;
}

const ItemSeparator: React.FC<Props> = ({ style }) => {
  const currentTheme = useSelector<ThemeState>((state) => state.theme);

  const styles = StyleSheet.create({
    separator: {
      backgroundColor:
        currentTheme === 'dark'
          ? theme.colors.dark.background.secondary
          : theme.colors.default.background.secondary,
      height: 30
    }
  });

  const separatorStyles = [styles.separator, style];
 
  return <View style={separatorStyles}></View>;
};

export default ItemSeparator;
