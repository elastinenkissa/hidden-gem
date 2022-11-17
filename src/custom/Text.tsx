import React from 'react';
import { StyleSheet, Text as NativeText } from 'react-native';
import { theme } from '../theme';
import { Spread, Style } from '../util/types/props';
import { useSelector } from 'react-redux';
import { ThemeState } from '../util/types/theme';

interface Props {
  style?: Style
  children: string;
  title?: boolean;
  bold?: boolean;
  [prop: string]: Spread;
}

const Text: React.FC<Props> = ({ style, ...props }) => {
  const currentTheme = useSelector<ThemeState>((state) => state.theme);

  const textStyle = [
    styles.default,
    currentTheme === 'dark' && styles.dark,
    props.title && styles.title,
    props.bold && styles.bold,
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
    backgroundColor: theme.colors.default.background,
  },
  dark: {
    color: theme.colors.dark.text,
    backgroundColor: theme.colors.dark.background.primary,
  },
  title: {
    fontSize: theme.text.size.title,
  },
  bold: {
    fontWeight: theme.text.weight.bold,
  },
});

export default Text;
