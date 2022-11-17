import React from 'react';
import { StyleSheet, View as NativeView } from 'react-native';
import { theme } from '../theme';
import { ThemeState } from '../util/types/theme';
import { useSelector } from 'react-redux';
import { Spread, Style } from '../util/types/props';

interface Props {
  style?: Style;
  children: JSX.Element[] | JSX.Element;
  [prop: string]: Spread;
}

const View: React.FC<Props> = ({ style, ...props }) => {
  const currentTheme = useSelector<ThemeState>((state) => state.theme);

  const viewStyle = [
    styles.default,
    currentTheme === 'dark' && styles.dark,
    style,
  ];

  return (
    <NativeView style={viewStyle} {...props}>
      {props.children}
    </NativeView>
  );
};

const styles = StyleSheet.create({
  default: {},
  dark: {
    backgroundColor: theme.colors.dark.background.primary,
  },
});

export default View;