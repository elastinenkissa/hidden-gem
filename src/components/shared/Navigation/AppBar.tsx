import React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-native';

import View from '../Custom/View';
import Button from '../Custom/Button';
import LocationSelector from './LocationSelector';

import { ThemeState } from '../../../util/types/theme';
import { LocationState } from '../../../util/types/cities';

import { theme } from '../../../theme';
 
const AppBar: React.FC = () => {
  const currentTheme = useSelector<ThemeState>((state) => state.theme);
  const [backTimes, setBackTimes] = React.useState<number>(-1);

  const { pathname } = useLocation();

  React.useEffect(() => {
    if (
      pathname.endsWith('gallery') ||
      pathname.endsWith('reviews') ||
      pathname.endsWith('map')
    ) {
      setBackTimes((backTime) => backTime - 1);
    } else {
      setBackTimes(-1);
    }
    console.log(backTimes);
  }, [pathname]);

  const back = useNavigate();

  const location = useSelector<LocationState>(
    (state) => state.location
  ) as string;

  const [visible, setVisible] = React.useState<boolean>(false);

  const backHandler = () => {
    back(backTimes);
  };

  const visibilityChangeHandler = () => {
    setVisible((prevVisible) => !prevVisible);
  };

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
      justifyContent: pathname === '/' ? 'center' : 'flex-start'
    },
    location: { height: 'auto' },
    locationText: {
      fontSize: 18
    }
  });

  return (
    <View style={styles.container}>
      {pathname === '/' ? (
        <>
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
        </>
      ) : (
        <Button onPress={backHandler} icon="keyboard-backspace"></Button>
      )}
    </View>
  );
};

export default AppBar;
