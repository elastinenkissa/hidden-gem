import React from 'react';
import { StyleProp, StyleSheet, Text as NativeText } from 'react-native';
import { theme } from '../theme';

interface Props {
  style?: {
    [prop: string]: any;
  };
  children: string;
  title?: boolean;
  bold?: boolean;
  [prop: string]: any;
}

const Text: React.FC<Props> = ({ style, ...props }) => {
  const [currentTheme, setCurrentTheme] = React.useState<string>('');

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
