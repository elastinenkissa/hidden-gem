import { useSelector } from 'react-redux';

import { LocaleStateObject } from '../reducers/localeReducer';
import { LocationState } from '../types/cities';
import { LocaleState } from '../types/locales';

export const useLocale = () => {
  const location = useSelector<LocationState>((state) => state.location);
  const allLocales = useSelector<LocaleState>(
    (state) => state.locales
  ) as LocaleStateObject[];

  const locales = allLocales.filter((locale) => locale.city === location);

  return locales;
};
