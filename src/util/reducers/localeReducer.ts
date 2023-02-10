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
    description: 'Some club thats a club and it is really nice and a club',
    coverImage:
      'https://th.bing.com/th/id/OIP.eEGWba1ERgbg_-tYEM6qLwHaE8?pid=ImgDet&rs=1',
    gallery: [],
    reviews: [{ rating: 'good', text: 'mm very gud club' }]
  },
  {
    id: Math.random().toString(),
    image: 'https://i.ytimg.com/vi/SiB6KEYRULQ/maxresdefault.jpg',
    name: 'Some Club',
    address: 'Patriotske lige 30',
    city: 'Sarajevo',
    description: 'Some club thats a club and it is really nice and a club',
    coverImage:
      'https://th.bing.com/th/id/OIP.eEGWba1ERgbg_-tYEM6qLwHaE8?pid=ImgDet&rs=1',
    gallery: [],
    reviews: []
  },
  {
    id: Math.random().toString(),
    image: 'https://i.ytimg.com/vi/SiB6KEYRULQ/maxresdefault.jpg',
    name: 'Some Club',
    address: 'Patriotske lige 30',
    city: 'Sarajevo',
    description: 'Some club thats a club and it is really nice and a club',
    coverImage:
      'https://th.bing.com/th/id/OIP.eEGWba1ERgbg_-tYEM6qLwHaE8?pid=ImgDet&rs=1',
    gallery: [],
    reviews: []
  },
  {
    id: Math.random().toString(),
    image: 'https://i.ytimg.com/vi/SiB6KEYRULQ/maxresdefault.jpg',
    name: 'Some Club',
    address: 'Patriotske lige 30',
    city: 'Sarajevo',
    description: 'Some club thats a club and it is really nice and a club',
    coverImage:
      'https://th.bing.com/th/id/OIP.eEGWba1ERgbg_-tYEM6qLwHaE8?pid=ImgDet&rs=1',
    gallery: [],
    reviews: []
  },
  {
    id: Math.random().toString(),
    image: 'https://i.ytimg.com/vi/SiB6KEYRULQ/maxresdefault.jpg',
    name: 'Some Club',
    address: 'Patriotske lige 30',
    city: 'Sarajevo',
    description: 'Some club thats a club and it is really nice and a club',
    coverImage:
      'https://th.bing.com/th/id/OIP.eEGWba1ERgbg_-tYEM6qLwHaE8?pid=ImgDet&rs=1',
    gallery: [],
    reviews: []
  },
  {
    id: Math.random().toString(),
    image: 'https://i.ytimg.com/vi/SiB6KEYRULQ/maxresdefault.jpg',
    name: 'Some Club',
    address: 'Patriotske lige 30',
    city: 'Sarajevo',
    description: 'Some club thats a club and it is really nice and a club',
    coverImage:
      'https://th.bing.com/th/id/OIP.eEGWba1ERgbg_-tYEM6qLwHaE8?pid=ImgDet&rs=1',
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
