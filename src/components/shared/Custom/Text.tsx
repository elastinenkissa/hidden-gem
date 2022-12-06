import React from 'react';
import { StyleSheet, Text as NativeText } from 'react-native';
import { useSelector } from 'react-redux';

import { Spread, Style } from '../../../util/types/props';
import { ThemeState } from '../../../util/types/theme';

import { theme } from '../../../theme';

interface Props {
  style?: Style;
  children: string;
  title?: boolean;
  bold?: boolean;
  ghost?: boolean;
  [prop: string]: Spread;
}

const Text: React.FC<Props> = ({ style, ...props }) => {
  const currentTheme = useSelector<ThemeState>((state) => state.theme);

  const textStyle = [
    styles.default,
    currentTheme === 'dark' ? styles.dark : styles.default,
    props.title && styles.title,
    props.bold && styles.bold,
    props.ghost && currentTheme === 'dark' && styles.lighterDark,
    props.ghost && currentTheme === 'light' && styles.darkerLight,
    style
  ];

  return (
    <NativeText style={textStyle} {...props}>
      {props.children}
    </NativeText>
  );
};

const styles = StyleSheet.create({
  bold: {
    fontWeight: theme.text.weight.bold
  },
  dark: {
    backgroundColor: theme.colors.dark.background.primary,
    color: theme.colors.dark.text
  },
  darkerLight: { backgroundColor: theme.colors.default.background.secondary },
  default: {
    backgroundColor: theme.colors.default.background.primary,
    color: theme.colors.default.text,
    fontSize: theme.text.size.default
  },
  lighterDark: { backgroundColor: theme.colors.dark.background.secondary },
  title: {
    fontSize: theme.text.size.title,
    fontWeight: theme.text.weight.title
  }
});

export default Text;
