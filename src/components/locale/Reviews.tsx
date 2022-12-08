import React from 'react';
import { FlatList } from 'react-native';

import ItemSeparator from '../shared/Custom/ItemSeperator';
import View from '../shared/Custom/View';
import Text from '../shared/Custom/Text';

import { LocaleProps } from '../../util/types/locales';

interface ReviewProps {
  item: { text: string };
}

const Review: React.FC<ReviewProps> = (props) => {
  return (
    <View>
      <Text>{props.item.text}</Text>
    </View>
  );
};

const Reviews: React.FC<LocaleProps> = (props) => {
  return (
    <FlatList
      data={props.locale.reviews}
      renderItem={({ item }) => <Review item={item} />}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default Reviews;
