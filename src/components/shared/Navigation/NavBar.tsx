import { StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import { useSelector } from 'react-redux';

import { Style } from '../../../util/types/props';
import { ThemeState } from '../../../util/types/theme';

import { theme } from '../../../theme';

import View from '../../../custom/View';
import Button from '../../../custom/Button';

interface Props {
  style?: Style;
}

const NavBar: React.FC<Props> = () => {
  const currentTheme = useSelector<ThemeState>((state) => state.theme);

  const styles = StyleSheet.create({
    container: {
      borderTopColor:
        currentTheme === 'dark'
          ? theme.colors.dark.border.color
          : theme.colors.default.border.color,
      borderTopWidth: theme.dimensions.navigation.borderWidth,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      height: theme.dimensions.navigation.height
    }
  });

  return (
    <View style={styles.container}>
      <Link to={'/'}>
        <Button icon="home" />
      </Link>
      <Button icon="plus" />
      <Link to={'/account'}>
        <Button icon="account" />
      </Link>
    </View>
  );
};

export default NavBar;
