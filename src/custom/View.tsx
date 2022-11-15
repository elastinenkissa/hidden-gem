import React from 'react';
import { StyleSheet, View as NativeView } from 'react-native';
import { theme } from '../theme';

interface Props {
  style?: {
    [prop: string]: any;
  };
  children: JSX.Element[] | JSX.Element;
  [prop: string]: any;
}

const View: React.FC<Props> = ({ style, ...props }) => {
  const [currentTheme, setCurrentTheme] = React.useState<string>('');
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
