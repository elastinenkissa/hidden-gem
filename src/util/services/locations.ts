import axios from 'axios';

import { Country } from '../types/cities';

const baseUrl = 'https://restcountries.com/v2/all';

const getLocations = async () => {
  const response = await axios.get<Country[]>(baseUrl, {
    params: { fields: ['name, capital'] }
  });
  return response.data;
};

export { getLocations };
 