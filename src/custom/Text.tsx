import React from 'react';
import { StyleSheet, Text as NativeText } from 'react-native';
import { theme } from '../theme';
import { Spread, Style } from '../util/types/props';
import { useSelector } from 'react-redux';
import { ThemeState } from '../util/types/theme';

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
    style,
  ];

  return (
    <NativeText style={textStyle} {...props}>
      {props.children}
    </NativeText>
  );
};

const styles = StyleSheet.create({
  default: {
    fontSize: theme.text.size.default,
    color: theme.colors.default.text,
    backgroundColor: theme.colors.default.background.primary,
  },
  dark: {
    color: theme.colors.dark.text,
    backgroundColor: theme.colors.dark.background.primary,
  },
  title: {
    fontSize: theme.text.size.title,
    fontWeight: theme.text.weight.title,
  },
  bold: {
    fontWeight: theme.text.weight.bold,
  },
  lighterDark: { backgroundColor: theme.colors.dark.background.secondary },
  darkerLight: { backgroundColor: theme.colors.default.background.secondary },
});

export default Text;
