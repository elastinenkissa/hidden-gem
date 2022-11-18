import View from '../../custom/View';
import { Style } from '../../util/types/props';
import { useSelector } from 'react-redux';
import { ThemeState } from '../../util/types/theme';
import Button from '../../custom/Button';
import { theme } from '../../theme';
import { Pressable, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

interface Props {
  style?: Style;
}

interface ShadowStyle {
  [prop: string]: string;
}

const NavBar: React.FC<Props> = () => {
  const currentTheme = useSelector<ThemeState>((state) => state.theme);

  const getShadow = (): ShadowStyle =>
    currentTheme === 'dark'
      ? { ...theme.colors.dark.shadow }
      : { ...theme.colors.default.shadow };

  const styles = StyleSheet.create({
    container: {
      ...getShadow(),
      shadowOpacity: 0.5,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      height: 40,
    },
  });

  return (
    <View style={styles.container}>
      <Link to={'/'}>
        <Button icon="home" />
      </Link>
      <Button icon="plus" />
      <Button icon="pencil" />
      <Link to={'/account'}>
        <Button icon="account" />
      </Link>
    </View>
  );
};

export default NavBar;
