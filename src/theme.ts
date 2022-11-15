interface ThemeElement {
  [prop: string]: any;
}

interface Theme {
  [prop: string]: ThemeElement;
}

export const theme: Theme = {
  text: {
    size: {
      default: 15,
      title: 20,
    },
    weight: {
      default: 300,
      title: 800,
    },
  },
  position: {},
  colors: {
    default: {
      text: '#20232a',
      background: 'white',
      shadow: {
        shadowColor: '#171717',
        shadowOffset: { height: 5, width: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
    },
    dark: {
      text: 'white',
      background: {
        primary: '#20232a',
        secondary: '#272a31',
      },
      shadow: {
        shadowColor: '#171717',
        shadowOffset: { height: 1, width: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
      },
    },
  },
};
