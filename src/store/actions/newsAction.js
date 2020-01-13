import axios from 'axios';

export const getNews = (newsType, page) => {
  return (dispatch) => {
    axios.get(`https://api.hackernews.io/${newsType}?page=${page}`).then((res) => {
      dispatch({ type: 'GET_NEWS', news: res.data })
    })
  }
}

export const getNewsDetail = (newsId) => {
  return (dispatch) => {
    axios.get(`https://api.hackernews.io/item/${newsId}`).then((res) => {
      dispatch({
        type: 'GET_DETAILS',
        details: res.data
      })
    })
  }
}

export const cleanNews = () => {
 return {
    type: 'CLEAN_NEWS',
  }
}