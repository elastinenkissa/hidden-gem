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
      title: 20
    },
    weight: {
      default: 'normal',
      title: 'bold'
    }
  },
  // dimensions: {
  //   navigation: {
  //     height: 40,
  //     borderWidth: 0.2,
  //   },
  // },
  colors: {
    // global: {
    //   stats: {
    //     border: 'cyan'
    //   }
    // },
    default: {
      text: '#20232a',
      background: {
        primary: 'white',
        secondary: '#e1e5e8'
      },
      border: {
        color: '#9c9ea2'
      }
    },
    dark: {
      text: 'white',
      background: {
        primary: '#20232a',
        secondary: '#272a31'
      },
      border: {
        color: '#9c9ea2'
      }
    }
  }
};
