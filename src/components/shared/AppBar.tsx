import React from 'react';
import { StyleSheet } from 'react-native';
import View from '../../custom/View';
import { theme } from '../../theme';
import { useSelector } from 'react-redux';
import { ThemeState } from '../../util/types/theme';
import Button from '../../custom/Button';
import { LocationState } from '../../util/types/cities';
import LocationSelector from './LocationSelector';

const AppBar: React.FC = () => {
  const currentTheme = useSelector<ThemeState>((state) => state.theme);

  const location = useSelector<LocationState>(
    (state) => state.location
  ) as string;

  const styles = StyleSheet.create({
    container: {
      height: theme.dimensions.navigation.height * 2,
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomColor: currentTheme === 'dark'
      ? theme.colors.dark.border.color
      : theme.colors.default.border.color,
      borderBottomWidth: theme.dimensions.navigation.borderWidth
    },
    location: { height: 'auto' },
    locationText: {
      fontSize: 18,
    },
  });

  const [visible, setVisible] = React.useState<boolean>(false);

  const visibilityChangeHandler = () => {
    setVisible((prevVisible) => !prevVisible);
  };

  return (
    <View style={styles.container}>
        <Button
          onPress={visibilityChangeHandler}
          labelStyle={styles.locationText}
          style={styles.location}
          icon="map-marker"
        >
          {location ? location : 'Select a location'}
        </Button>
        <LocationSelector
          onChangeVisibility={visibilityChangeHandler}
          visible={visible}
        />
    </View>
  );
};

export default AppBar;
