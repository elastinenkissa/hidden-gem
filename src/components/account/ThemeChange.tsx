import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../shared/Custom/Button';

import { setTheme } from '../../util/reducers/themeReducer';
import { ThemeState } from '../../util/types/theme';

const ThemeChange: React.FC = () => {
  const currentTheme = useSelector<ThemeState>((state) => state.theme);

  const dispatch = useDispatch();

  const themeChangeHandler: () => void = () => {
    if (currentTheme === 'light') {
      dispatch(setTheme('dark'));
      return;
    }
    dispatch(setTheme('light'));
  };

  return (
    <Button
      onPress={themeChangeHandler}
      icon={
        currentTheme === 'dark' ? 'moon-waning-crescent' : 'white-balance-sunny'
      }
    >
      Change theme
    </Button>
  );
};

export default ThemeChange;
