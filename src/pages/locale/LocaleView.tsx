import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-native';

import View from '../../components/shared/Custom/View';
import Text from '../../components/shared/Custom/Text';
import Button from '../../components/shared/Custom/Button';

import { LocaleState } from '../../util/types/locales';
import { LocaleStateObject } from '../../util/reducers/localeReducer';

const LocaleView: React.FC = () => {
  const { id } = useParams();

  const locales = useSelector<LocaleState>(
    (state) => state.locales
  ) as LocaleStateObject[];

  const locale = locales.find((locale) => locale.id === id)!;

  return (
    <View>
      {/* <View>
        <Image style={{ height: 150, width: '100%' }} source={{ uri: locale.coverImage }} />
      </View>
      <View>
        <Text>{locale.name}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Button>About</Button>
          <Button>Gallery</Button>
          <Button>Reviews</Button>
          <Button>Map</Button>
        </View>
      </View>
      <View>
        <View style={{ alignItems: 'center' }}>
          <Text>{locale.description}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Text>{`${locale.reviews.length.toString()} ratings`}</Text>
          <Text>75 (placeholder)</Text>
          <View>
            <Text>3 good (placeholder)</Text>
            <Text>1 neutral (placeholder)</Text>
            <Text>1 bad (placeholder)</Text>
          </View>
        </View>
      </View> */}
    </View>
  );
};

export default LocaleView;
