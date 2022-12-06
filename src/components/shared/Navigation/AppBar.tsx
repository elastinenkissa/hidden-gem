import React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import View from '../Custom/View';
import Button from '../Custom/Button';
import LocationSelector from './LocationSelector';

import { ThemeState } from '../../../util/types/theme';
import { LocationState } from '../../../util/types/cities';

import { theme } from '../../../theme';

const AppBar: React.FC = () => {
  const currentTheme = useSelector<ThemeState>((state) => state.theme);

  const location = useSelector<LocationState>(
    (state) => state.location
  ) as string;

  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      borderBottomColor:
        currentTheme === 'dark'
          ? theme.colors.dark.border.color
          : theme.colors.default.border.color,
      borderBottomWidth: theme.dimensions.navigation.borderWidth,
      flexDirection: 'row',
      height: theme.dimensions.navigation.height * 2,
      justifyContent: 'center'
    },
    location: { height: 'auto' },
    locationText: {
      fontSize: 18
    }
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
