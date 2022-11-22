import { FlatList, Image, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import NoPlaces from '../../components/locale/NoPlaces';
import ItemSeparator from '../../custom/ItemSeperator';
import Text from '../../custom/Text';
import View from '../../custom/View';
import { theme } from '../../theme';
import { useLocale } from '../../util/hooks/useLocale';
import { LocaleStateObject } from '../../util/reducers/localeReducer';

interface LocaleItemProps {
  item: LocaleStateObject;
}

const LocaleItem: React.FC<LocaleItemProps> = (props) => {
  const imageDimensions = 100;
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      marginTop: theme.dimensions.navigation.height / 2,
      marginBottom: theme.dimensions.navigation.height / 2,
    },
    image: {
      borderRadius: imageDimensions / 2,
      width: imageDimensions,
      height: imageDimensions,
      margin: 15,
    },
    textContainer: {
      justifyContent: 'space-around',
      flexShrink: 1,
      marginRight: 15,
    },
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
