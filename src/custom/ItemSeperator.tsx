import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { theme } from '../theme';
import { ThemeState } from '../util/types/theme';

const ItemSeparator: React.FC = () => {
  const currentTheme = useSelector<ThemeState>((state) => state.theme);

  const styles = StyleSheet.create({
    separator: {
      height: 20,
      backgroundColor:
        currentTheme === 'dark'
          ? theme.colors.dark.background.secondary
          : theme.colors.default.background.secondary,
    },
  });
  return <View style={styles.separator}></View>;
};

export default ItemSeparator;
