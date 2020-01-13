const initState = {
  news: [],
  newsDetail: [],
  isLoading: false,
}

const rootReducer = (state = initState, action) => {
  if (action.type === 'GET_NEWS') {
     const uniqueNews = {};
     let { news } = state;
     news = news.concat(action.news).filter((item) => {
       if (!uniqueNews[item.id]) {
         uniqueNews[item.id] = true;
         return true;
       }
       return false;
     });
    return {
      ...state,
      news
    }
  }
  if (action.type === 'GET_DETAILS') {
    return {
      ...state,
      newsDetail: action.details
    }
  }
  if (action.type === 'CLEAN_NEWS') {
    return {
      ...state,
      news: []
    }
  }
  return state;
}

export default rootReducer;