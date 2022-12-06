import React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import Text from '../shared/Custom/Text';
import View from '../shared/Custom/View';

import { LocationState } from '../../util/types/cities';

const NoPlaces: React.FC = () => {
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      height: 600,
      justifyContent: 'center',
    },
  });

  const location = useSelector<LocationState>((state) => state.location);

  return (
    <View ghost style={styles.container}>
      <Text ghost title>
        {location ? 'No locales found' : 'Please select a city'}
      </Text>
    </View>
  );
};

export default NoPlaces;
