import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-native';

import View from '../../components/shared/Custom/View';
import Header from '../../components/locale/Header';
import ItemSeparator from '../../components/shared/Custom/ItemSeperator';

import { LocaleState } from '../../util/types/locales';
import { LocaleStateObject } from '../../util/reducers/localeReducer';
import Info from './Info';

const LocaleView: React.FC = () => {
  const { id } = useParams();
  
  const locales = useSelector<LocaleState>(
    (state) => state.locales
  ) as LocaleStateObject[];

  const locale = locales.find(
    (locale) => locale.id === id
  ) as LocaleStateObject;

  return (
    <View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: locale.coverImage }} />
      </View>
      <Header locale={locale} />
      <ItemSeparator style={styles.separator} />
      <Info locale={locale} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: { flexDirection: 'row', justifyContent: 'center' },
  image: { height: 150, width: '100%' },
  separator: { height: 15 }
});

export default LocaleView;
