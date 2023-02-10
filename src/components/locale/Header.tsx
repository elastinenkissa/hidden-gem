import React from 'react';
import { StyleSheet, View as NativeView } from 'react-native';

import Text from '../shared/Custom/Text';
import View from '../shared/Custom/View';

import { LocaleProps } from '../../util/types/locales';
import Links from './Links';

const Header: React.FC<LocaleProps> = (props) => {
  return (
    <View>
      <Text style={styles.title} title>
        {props.locale.name}
      </Text>
      <NativeView style={styles.line}></NativeView>
      <View style={styles.header}>
        <Links locale={props.locale} />
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
  header: { flexDirection: 'row', justifyContent: 'space-evenly', margin: 5 }
});

export default Header;
