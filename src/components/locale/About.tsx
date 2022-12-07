import React from 'react';
import { StyleSheet } from 'react-native';

import Text from '../shared/Custom/Text';
import View from '../shared/Custom/View';

import { LocaleStateObject } from '../../util/reducers/localeReducer';

interface Props {
  locale: LocaleStateObject;
}

const About: React.FC<Props> = (props) => {
  const goodRatings = props.locale.reviews.filter(
    (review) => review.rating === 'good'
  ).length;

  const neutalRatings = props.locale.reviews.filter(
    (review) => review.rating === 'neutral'
  ).length;

  const badRatings = props.locale.reviews.filter(
    (review) => review.rating === 'bad'
  ).length;

  const ratingsRatio = goodRatings / (goodRatings + badRatings);

  const ratioDimensions = 50;

  const styles = StyleSheet.create({
    container: {
      height: '50%',
      width: '75%',
      justifyContent: 'space-around',
      alignSelf: 'center'
    },
    description: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    rating: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    ratio: {
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      height: ratioDimensions,
      width: ratioDimensions,
      borderStyle: 'solid',
      borderWidth: 2,
      borderColor: 'cyan',
      borderRadius: ratioDimensions / 2
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.description}>
        <Text>{props.locale.description}</Text>
      </View>
      <View style={styles.rating}>
        <Text>{`${props.locale.reviews.length} ${
          props.locale.reviews.length === 1 ? 'review' : 'reviews'
        }`}</Text>
        <View style={styles.ratio}>
          <Text>{ratingsRatio}</Text>
        </View>
        <View>
          <Text>{goodRatings} good</Text>
          <Text>{neutalRatings} neutral</Text>
          <Text>{badRatings} bad</Text>
        </View>
      </View>
    </View>
  );
};

export default About;
