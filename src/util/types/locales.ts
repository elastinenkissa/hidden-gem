import { LocaleStateObject } from '../reducers/localeReducer';

export interface LocaleState {
  locales: LocaleStateObject[];
}

export interface LocaleProps {
  locale: LocaleStateObject;
}

export type LocalesType = Array<LocaleStateObject>;
 