import React from 'react';
import { StyleSheet } from 'react-native';
import { LocaleStateObject } from '../../util/reducers/localeReducer';
import Button from '../shared/Custom/Button';
import Text from '../shared/Custom/Text';
import View from '../shared/Custom/View';

interface Props {
  locale: LocaleStateObject
}

const Header: React.FC<Props> = (props) => {
  return (
    <View>
      <Text>{props.locale.name}</Text>
      <View style={styles.header}>
        <Button>About</Button>
        <Button>Gallery</Button>
        <Button>Reviews</Button>
        <Button>Map</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: { flexDirection: 'row', justifyContent: 'center' }
});

export default Header;
