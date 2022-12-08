import React from 'react';
import { Image } from 'react-native';

import View from '../shared/Custom/View';

import { LocaleProps } from '../../util/types/locales';

const Gallery: React.FC<LocaleProps> = (props) => {
  return (
    <View>
      <View>
        <Image source={{ uri: props.locale.coverImage }} />
      </View>
      <View>
        <Image source={{ uri: props.locale.coverImage }} />
      </View>
      <View>
        <Image source={{ uri: props.locale.coverImage }} />
      </View>
    </View>
  );
};

export default Gallery;
