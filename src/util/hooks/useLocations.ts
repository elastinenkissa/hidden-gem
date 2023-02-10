import React from 'react';
import { getLocations } from '../services/locations';

import { Country } from '../types/cities';

export const useLocations = () => {
  const [countries, setCountries] = React.useState<Country[]>([]);
  const [cities, setCities] = React.useState<Country[]>([]);
  const [searchQuery, setSearchQuery] = React.useState<string>('');

 

  const getCountries = async (): Promise<void> => {
    const fetchedLocations = await getLocations();
    setCountries(fetchedLocations);
  };
 
  React.useEffect(() => {
    const abortCtrl = new AbortController();
    getCountries();

    return () => {
      abortCtrl.abort();
    };
  }, []);

  const search = (query: string) => {
    setSearchQuery(query);
    setCities(
      countries.filter((country) =>
        country?.capital?.toLowerCase().startsWith(query.toLowerCase())
      )
    );
  };

  return { cities, search, searchQuery };
};
