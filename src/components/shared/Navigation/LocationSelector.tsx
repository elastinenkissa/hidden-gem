import React from 'react';
import Constants from 'expo-constants';
import { Modal, ScrollView, StyleSheet, View } from 'react-native';
import { RadioButton, Searchbar } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import { setLocation } from '../../../util/reducers/locationReducer';
import { Country, LocationState } from '../../../util/types/cities';

import { theme } from '../../../theme';
import { useLocations } from '../../../util/hooks/useLocations';

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
  const dispatch = useDispatch();

  const location = useSelector<LocationState>(
    (state) => state.location
  ) as string;

  const { cities, search, searchQuery } = useLocations();
 
  const locationSelectHandler = (city: string): void => {
    dispatch(setLocation(city));
    props.onSelect();
  };

  const searchHandler = (query: string) => {
    search(query);
  };

  return (
    <View>
      <Searchbar
        placeholder="Search a city..."
        onChangeText={searchHandler}
        value={searchQuery}
      />
      <RadioButton.Group onValueChange={locationSelectHandler} value={location}>
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
      </RadioButton.Group>
    </View>
  );
};

const LocationSelector: React.FC<SelectorProps> = (props) => {
  const styles = StyleSheet.create({
    content: {
      backgroundColor: theme.colors.default.background.primary,
      height: 'auto',
      margin: 30,
      marginBottom: 70,
      marginTop: 90 + Constants.statusBarHeight
    }
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
