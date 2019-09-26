import { FETCH_NEWS } from './types';

const BASE_URL = 'https://api.hackernews.io';

export const fetchNews = () => dispatch => {
  fetch(`${BASE_URL}/news`)
    .then(res => res.json())
    .then(data => dispatch({
      type: FETCH_NEWS,
      payload: data
    }));
};