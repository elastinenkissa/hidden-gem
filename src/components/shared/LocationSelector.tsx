import axios from 'axios';
import React from 'react';
import { Modal, ScrollView, StyleSheet, View } from 'react-native';
import { RadioButton, Searchbar } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { theme } from '../../theme';
import { setLocation } from '../../util/reducers/locationReducer';
import { Country, LocationState } from '../../util/types/cities';
import Constants from 'expo-constants';

interface ItemProps {
  item: Country;
}

interface ListProps {
  onSelect: () => void;
}

interface SelectorProps {
  onChangeVisibility: () => void;
  visible: boolean;
}

const LocationListItem: React.FC<ItemProps> = (props) => {
  return (
    <RadioButton.Item
      label={`${props.item.capital}, ${props.item.name}`}
      value={props.item.capital}
    />
  );
};

const LocationList: React.FC<ListProps> = (props) => {
  const [countries, setCountries] = React.useState<Country[]>([]);
  const [cities, setCities] = React.useState<Country[]>([]);
  const [searchQuery, setSearchQuery] = React.useState<string>('');

  const dispatch = useDispatch();

  const location = useSelector<LocationState>(
    (state) => state.location
  ) as string;

  const getCountries = async (): Promise<void> => {
    const response = await axios.get<Country[]>(
      'https://restcountries.com/v2/all?fields=name,capital'
    );
    setCountries(response.data);
  };

  React.useEffect(() => {
    const abortCtrl = new AbortController();
    getCountries();

    return () => {
      abortCtrl.abort();
    };
  }, []);

  const locationSelectHandler = (city: string): void => {
    dispatch(setLocation(city));
    props.onSelect();
  };

  const searchHandler = (query: string) => {
    setSearchQuery(query);
    setCities(
      countries.filter((country) =>
        country?.capital?.toLowerCase().startsWith(query.toLocaleLowerCase())
      )
    );
  };

  return (
    <View>
      <>
        <Searchbar
          placeholder="Search a city..."
          onChangeText={searchHandler}
          value={searchQuery}
        />
        <RadioButton.Group
          onValueChange={locationSelectHandler}
          value={location}
        >
          <>
            {searchQuery &&
              cities.map(
                (country) =>
                  country.capital !== undefined && (
                    <LocationListItem
                      key={`${country.capital}, ${country.name}`}
                      item={country}
                    />
                  )
              )}
          </>
        </RadioButton.Group>
      </>
    </View>
  );
};

const LocationSelector: React.FC<SelectorProps> = (props) => {
  const styles = StyleSheet.create({
    content: {
      margin: 30,
      marginTop: 90 + Constants.statusBarHeight,
      marginBottom: 70,
      height: 'auto',
      backgroundColor: theme.colors.default.background.primary,
    },
  });

  const visibilityChangeHandler = () => {
    props.onChangeVisibility();
  };

  return (
    <Modal
      animationType="fade"
      transparent
      visible={props.visible}
      onRequestClose={visibilityChangeHandler}
    >
      <ScrollView style={styles.content}>
        <LocationList onSelect={visibilityChangeHandler} />
      </ScrollView>
    </Modal>
  );
};

export default LocationSelector;
