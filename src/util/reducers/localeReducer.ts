import { createSlice } from '@reduxjs/toolkit';

type RatingChoice = 'good' | 'neutral' | 'bad';

export interface Review {
  rating: RatingChoice;
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
    name: 'Some Club',
    address: 'Patriotske lige 30',
    city: 'Sarajevo',
    description:
      'Some club thats a club and it is really nice and a club',
    coverImage:
      'https://scontent.fsjj1-1.fna.fbcdn.net/v/t39.30808-6/304944135_487324470067186_4266126793541602156_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_ohc=gjhDY9wpUNQAX9wfPQH&_nc_ht=scontent.fsjj1-1.fna&oh=00_AfDCkeq9O_XHcnfVwIMJjQquCEo7y_0XJk9NWCRr3GMh-Q&oe=637EC0E7',
    gallery: [],
    reviews: [{ rating: 'good', text: 'mm very gud club' }]
  },
  {
    id: Math.random().toString(),
    image: 'https://i.ytimg.com/vi/SiB6KEYRULQ/maxresdefault.jpg',
    name: 'Some Club',
    address: 'Patriotske lige 30',
    city: 'Sarajevo',
    description:
      'Some club thats a club and it is really nice and a club',
    coverImage:
      'https://scontent.fsjj1-1.fna.fbcdn.net/v/t39.30808-6/304944135_487324470067186_4266126793541602156_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_ohc=gjhDY9wpUNQAX9wfPQH&_nc_ht=scontent.fsjj1-1.fna&oh=00_AfDCkeq9O_XHcnfVwIMJjQquCEo7y_0XJk9NWCRr3GMh-Q&oe=637EC0E7',
    gallery: [],
    reviews: []
  },
  {
    id: Math.random().toString(),
    image: 'https://i.ytimg.com/vi/SiB6KEYRULQ/maxresdefault.jpg',
    name: 'Some Club',
    address: 'Patriotske lige 30',
    city: 'Sarajevo',
    description:
      'Some club thats a club and it is really nice and a club',
    coverImage:
      'https://scontent.fsjj1-1.fna.fbcdn.net/v/t39.30808-6/304944135_487324470067186_4266126793541602156_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_ohc=gjhDY9wpUNQAX9wfPQH&_nc_ht=scontent.fsjj1-1.fna&oh=00_AfDCkeq9O_XHcnfVwIMJjQquCEo7y_0XJk9NWCRr3GMh-Q&oe=637EC0E7',
    gallery: [],
    reviews: []
  },
  {
    id: Math.random().toString(),
    image: 'https://i.ytimg.com/vi/SiB6KEYRULQ/maxresdefault.jpg',
    name: 'Some Club',
    address: 'Patriotske lige 30',
    city: 'Sarajevo',
    description:
      'Some club thats a club and it is really nice and a club',
    coverImage:
      'https://scontent.fsjj1-1.fna.fbcdn.net/v/t39.30808-6/304944135_487324470067186_4266126793541602156_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_ohc=gjhDY9wpUNQAX9wfPQH&_nc_ht=scontent.fsjj1-1.fna&oh=00_AfDCkeq9O_XHcnfVwIMJjQquCEo7y_0XJk9NWCRr3GMh-Q&oe=637EC0E7',
    gallery: [],
    reviews: []
  },
  {
    id: Math.random().toString(),
    image: 'https://i.ytimg.com/vi/SiB6KEYRULQ/maxresdefault.jpg',
    name: 'Some Club',
    address: 'Patriotske lige 30',
    city: 'Sarajevo',
    description:
      'Some club thats a club and it is really nice and a club',
    coverImage:
      'https://scontent.fsjj1-1.fna.fbcdn.net/v/t39.30808-6/304944135_487324470067186_4266126793541602156_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_ohc=gjhDY9wpUNQAX9wfPQH&_nc_ht=scontent.fsjj1-1.fna&oh=00_AfDCkeq9O_XHcnfVwIMJjQquCEo7y_0XJk9NWCRr3GMh-Q&oe=637EC0E7',
    gallery: [],
    reviews: []
  },
  {
    id: Math.random().toString(),
    image: 'https://i.ytimg.com/vi/SiB6KEYRULQ/maxresdefault.jpg',
    name: 'Some Club',
    address: 'Patriotske lige 30',
    city: 'Sarajevo',
    description:
      'Some club thats a club and it is really nice and a club',
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
