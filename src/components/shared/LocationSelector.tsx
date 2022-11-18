import axios from 'axios';
import React from 'react';
import { Modal, Pressable, ScrollView, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { theme } from '../../theme';
import { setLocation } from '../../util/reducers/locationReducer';
import { Country, LocationState } from '../../util/types/cities';

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

  return (
    <RadioButton.Group onValueChange={locationSelectHandler} value={location}>
      {countries.map((country) => (
        <LocationListItem
          key={`${country.capital}, ${country.name}`}
          item={country}
        />
      ))}
    </RadioButton.Group>
  );
};

const LocationSelector: React.FC<SelectorProps> = (props) => {
  const styles = StyleSheet.create({
    content: {
      margin: 30,
      marginTop: 90,
      marginBottom: 70,
      backgroundColor: theme.colors.default.background.primary,
    },
  });

  const visibilityChangeHandler = () => {
    props.onChangeVisibility();
  };

  return (
    <Modal
      onTouchEnd={visibilityChangeHandler}
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
