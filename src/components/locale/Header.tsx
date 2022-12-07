import React from 'react';
import { StyleSheet } from 'react-native';
import { LocaleStateObject } from '../../util/reducers/localeReducer';
import Button from '../shared/Custom/Button';
import Text from '../shared/Custom/Text';
import View from '../shared/Custom/View';

interface Props {
  locale: LocaleStateObject;
}

const Header: React.FC<Props> = (props) => {
  return (
    <View>
      <Text style={styles.title} title>
        {props.locale.name}
      </Text>
      <View style={styles.line}>

      </View>
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
  line: {
    width: '100%',
    borderBottomColor: 'grey',
    borderStyle: 'solid',
    borderWidth: 0.2,
    alignSelf: 'center',
    flexDirection: 'row'
  },
  title: {
    margin: 20,
    textAlign: 'center'
  },
  header: { flexDirection: 'row', justifyContent: 'space-evenly', margin: 10 }
});

export default Header;
