import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import Text from '../../custom/Text';
import View from '../../custom/View';
import { LocationState } from '../../util/types/cities';

const NoPlaces: React.FC = () => {
  const styles = StyleSheet.create({
    container: {
      height: 600,
      justifyContent: 'center',
      alignItems: 'center',
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
