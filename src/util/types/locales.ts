import { LocaleStateObject } from '../reducers/localeReducer';

export interface LocaleState {
  locales: LocaleStateObject[];
}

export type LocalesType = Array<LocaleStateObject>;
