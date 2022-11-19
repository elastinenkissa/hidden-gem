import { FlatList, Image, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-native';
import ItemSeparator from '../../custom/ItemSeperator';
import Text from '../../custom/Text';
import View from '../../custom/View';
import { LocaleStateObject } from '../../util/reducers/localeReducer';
import { LocaleState } from '../../util/types/locales';

interface LocaleItemProps {
  item: LocaleStateObject;
}

const LocaleItem: React.FC<LocaleItemProps> = (props) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      overflow: 'visible'
    },
    image: {
      borderRadius: 100,
      width: 100,
      height: 100,
      margin: 15,
    },
    textContainer: {
      justifyContent: 'space-around',
    },
  });

  return (
    <Link to={`/locales/${props.item.id}`} style={styles.container}>
      <>
        <View>
          <Image style={styles.image} source={{ uri: props.item.image }} />
        </View>
        <View style={styles.textContainer}>
          <>
            <Text title>{props.item.name}</Text>
            <Text>{props.item.description}</Text>
          </>
        </View>
      </>
    </Link>
  );
};

const Locales: React.FC = () => {
  const locales = useSelector<LocaleState>(
    (state) => state.locales
  ) as LocaleStateObject[];

  return (
    <FlatList
      data={locales}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <LocaleItem key={item.id} item={item} />}
    />
  );
};

export default Locales;
