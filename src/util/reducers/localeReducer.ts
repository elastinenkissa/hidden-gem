import { createSlice } from '@reduxjs/toolkit';

type Ratingg = 'good' | 'neutral' | 'bad';

export interface Review {
  rating: Ratingg;
  text: string;
}

export interface LocaleStateObject {
  id: string;
  image: string;
  name: string;
  address: string;
  city: string;
  description: string;
  coverImage: string;
  gallery: Array<string>;
  reviews: Array<Review>;
}

export interface Action {
  payload: LocaleStateObject;
}

const initialLocales: LocaleStateObject[] = [
  {
    id: Math.random().toString(),
    image: 'https://i.ytimg.com/vi/SiB6KEYRULQ/maxresdefault.jpg',
    name: 'AG Club',
    address: 'Patriotske lige 30',
    city: 'Sarajevo',
    description:
      'A nice pub for students and young people to hang out and listen to rock music at.',
    coverImage:
      'https://scontent.fsjj1-1.fna.fbcdn.net/v/t39.30808-6/304944135_487324470067186_4266126793541602156_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_ohc=gjhDY9wpUNQAX9wfPQH&_nc_ht=scontent.fsjj1-1.fna&oh=00_AfDCkeq9O_XHcnfVwIMJjQquCEo7y_0XJk9NWCRr3GMh-Q&oe=637EC0E7',
    gallery: [],
    reviews: [{ rating: 'good', text: 'mm very gud club' }]
  },
  {
    id: Math.random().toString(),
    image: 'https://i.ytimg.com/vi/SiB6KEYRULQ/maxresdefault.jpg',
    name: 'AG Club',
    address: 'Patriotske lige 30',
    city: 'Sarajevo',
    description:
      'A nice pub for students and young people to hang out and listen to rock music at.',
    coverImage:
      'https://scontent.fsjj1-1.fna.fbcdn.net/v/t39.30808-6/304944135_487324470067186_4266126793541602156_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_ohc=gjhDY9wpUNQAX9wfPQH&_nc_ht=scontent.fsjj1-1.fna&oh=00_AfDCkeq9O_XHcnfVwIMJjQquCEo7y_0XJk9NWCRr3GMh-Q&oe=637EC0E7',
    gallery: [],
    reviews: []
  },
  {
    id: Math.random().toString(),
    image: 'https://i.ytimg.com/vi/SiB6KEYRULQ/maxresdefault.jpg',
    name: 'AG Club',
    address: 'Patriotske lige 30',
    city: 'Sarajevo',
    description:
      'A nice pub for students and young people to hang out and listen to rock music at.',
    coverImage:
      'https://scontent.fsjj1-1.fna.fbcdn.net/v/t39.30808-6/304944135_487324470067186_4266126793541602156_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_ohc=gjhDY9wpUNQAX9wfPQH&_nc_ht=scontent.fsjj1-1.fna&oh=00_AfDCkeq9O_XHcnfVwIMJjQquCEo7y_0XJk9NWCRr3GMh-Q&oe=637EC0E7',
    gallery: [],
    reviews: []
  },
  {
    id: Math.random().toString(),
    image: 'https://i.ytimg.com/vi/SiB6KEYRULQ/maxresdefault.jpg',
    name: 'AG Club',
    address: 'Patriotske lige 30',
    city: 'Sarajevo',
    description:
      'A nice pub for students and young people to hang out and listen to rock music at.',
    coverImage:
      'https://scontent.fsjj1-1.fna.fbcdn.net/v/t39.30808-6/304944135_487324470067186_4266126793541602156_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_ohc=gjhDY9wpUNQAX9wfPQH&_nc_ht=scontent.fsjj1-1.fna&oh=00_AfDCkeq9O_XHcnfVwIMJjQquCEo7y_0XJk9NWCRr3GMh-Q&oe=637EC0E7',
    gallery: [],
    reviews: []
  },
  {
    id: Math.random().toString(),
    image: 'https://i.ytimg.com/vi/SiB6KEYRULQ/maxresdefault.jpg',
    name: 'AG Club',
    address: 'Patriotske lige 30',
    city: 'Sarajevo',
    description:
      'A nice pub for students and young people to hang out and listen to rock music at.',
    coverImage:
      'https://scontent.fsjj1-1.fna.fbcdn.net/v/t39.30808-6/304944135_487324470067186_4266126793541602156_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_ohc=gjhDY9wpUNQAX9wfPQH&_nc_ht=scontent.fsjj1-1.fna&oh=00_AfDCkeq9O_XHcnfVwIMJjQquCEo7y_0XJk9NWCRr3GMh-Q&oe=637EC0E7',
    gallery: [],
    reviews: []
  },
  {
    id: Math.random().toString(),
    image: 'https://i.ytimg.com/vi/SiB6KEYRULQ/maxresdefault.jpg',
    name: 'AG Club',
    address: 'Patriotske lige 30',
    city: 'Sarajevo',
    description:
      'A nice pub for students and young people to hang out and listen to rock music at.',
    coverImage:
      'https://scontent.fsjj1-1.fna.fbcdn.net/v/t39.30808-6/304944135_487324470067186_4266126793541602156_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_ohc=gjhDY9wpUNQAX9wfPQH&_nc_ht=scontent.fsjj1-1.fna&oh=00_AfDCkeq9O_XHcnfVwIMJjQquCEo7y_0XJk9NWCRr3GMh-Q&oe=637EC0E7',
    gallery: [],
    reviews: []
  }
];

const localeSlice = createSlice({
  name: 'locales',
  initialState: initialLocales,
  reducers: {
    getLocales(state: LocaleStateObject[]) {
      return state;
    },
    addLocale(state: LocaleStateObject[], action: Action) {
      state.push(action.payload);
    }
  }
});

export const { getLocales, addLocale } = localeSlice.actions;

export default localeSlice.reducer;
