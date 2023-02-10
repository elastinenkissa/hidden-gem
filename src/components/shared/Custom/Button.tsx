import React from 'react';
import { Button as PaperButton } from 'react-native-paper';
import { useSelector } from 'react-redux';

import { Spread, Style } from '../../../util/types/props';
import { ThemeState } from '../../../util/types/theme';

import { theme } from '../../../theme';

interface Props {
  style?: Style;
  children?: string;
  [prop: string]: Spread;
}

const Button: React.FC<Props> = ({ style, ...props }) => {
  const currentTheme = useSelector<ThemeState>((state) => state.theme);

  const buttonStyles = [style];

  return (
    <PaperButton
      textColor={
        currentTheme === 'dark'
          ? theme.colors.dark.text
          : theme.colors.default.text
      } 
      {...props}
      style={buttonStyles}
    >
      {props.children}
    </PaperButton>
  );
};

export default Button;
