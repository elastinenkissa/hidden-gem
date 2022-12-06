import React from 'react';
import { FlatList, Image, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

import NoPlaces from '../../components/locale/NoPlaces';
import ItemSeparator from '../../components/shared/Custom/ItemSeperator';
import Text from '../../components/shared/Custom/Text';
import View from '../../components/shared/Custom/View';

import { useLocale } from '../../util/hooks/useLocale';
import { LocaleStateObject } from '../../util/reducers/localeReducer';

import { theme } from '../../theme';

interface LocaleItemProps {
  item: LocaleStateObject;
}

const LocaleItem: React.FC<LocaleItemProps> = (props) => {
  const imageDimensions = 100;
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      marginBottom: theme.dimensions.navigation.height / 2,
      marginTop: theme.dimensions.navigation.height / 2
    },
    image: {
      borderRadius: imageDimensions / 2,
      height: imageDimensions,
      margin: 15,
      width: imageDimensions
    },
    textContainer: {
      flexShrink: 1,
      justifyContent: 'space-around',
      marginRight: 15
    }
  });

  return (
    <Link to={`/locales/${props.item.id}`} style={styles.container}>
      <>
        <View>
          <Image style={styles.image} source={{ uri: props.item.image }} />
        </View>
        <View style={styles.textContainer}>
          <Text title>{props.item.name}</Text>
          <Text>{props.item.description}</Text>
        </View>
      </>
    </Link>
  );
};

const Locales: React.FC = () => {
  const locales = useLocale();

  return (
    <FlatList
      data={locales}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }: { item: LocaleStateObject }) => (
        <LocaleItem item={item} />
      )}
      keyExtractor={(item) => item.id}
      ListEmptyComponent={NoPlaces}
    />
  );
};

export default Locales;
