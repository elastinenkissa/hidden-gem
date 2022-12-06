import React from 'react';
import { StyleSheet, View as NativeView } from 'react-native';
import { useSelector } from 'react-redux';

import { ThemeState } from '../../../util/types/theme';
import { Spread, Style } from '../../../util/types/props';

import { theme } from '../../../theme';

interface Props {
  style?: Style;
  children: JSX.Element | JSX.Element[];
  ghost?: boolean;
  [prop: string]: Spread;
}

const View: React.FC<Props> = ({ style, ...props }) => {
  const currentTheme = useSelector<ThemeState>((state) => state.theme);

  const viewStyle = [
    styles.default,
    currentTheme === 'dark' ? styles.dark : styles.default,
    props.ghost && currentTheme === 'dark' && styles.lighterDark,
    props.ghost && currentTheme === 'light' && styles.darkerLight,
    style
  ];

  return (
    <NativeView style={viewStyle} {...props}>
      {props.children}
    </NativeView>
  );
};

const styles = StyleSheet.create({
  dark: {
    backgroundColor: theme.colors.dark.background.primary
  },
  darkerLight: { backgroundColor: theme.colors.default.background.secondary },
  default: {
    backgroundColor: theme.colors.default.background.primary
  },
  lighterDark: { backgroundColor: theme.colors.dark.background.secondary }
});

export default View;
