import axios from 'axios';

export const getNews = (newsType) => {
  return (dispatch) => {
    axios.get(`https://api.hackernews.io/${newsType}`).then((res) => {
      dispatch({ type: 'GET_NEWS', news: res.data })
    })
  }
}