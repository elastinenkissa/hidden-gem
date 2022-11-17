import { Button } from 'react-native-paper';
import View from '../../custom/View';
import { Style } from '../../util/types/props';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeState } from '../../util/types/theme';
import { setTheme } from '../../util/reducers/themeReducer';

interface Props {
  style?: Style;
}

const NavBar: React.FC<Props> = () => {
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
    <View>
      <Button onPress={themeChangeHandler}>Change theme</Button>
    </View>
  );
};

export default NavBar;
