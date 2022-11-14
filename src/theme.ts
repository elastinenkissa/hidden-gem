interface ThemeElement {
  [prop: string]: any;
}

export interface Theme {
  global: ThemeElement;
  default: ThemeElement;
  dark: ThemeElement;
}

export const theme: Theme = {
  global: {},
  default: {},
  dark: {},
};
