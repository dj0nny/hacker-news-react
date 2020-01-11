const initState = {
  news: [],
  newsDetail: [],
  isLoading: false,
}

const rootReducer = (state = initState, action) => {
  if (action.type === 'GET_NEWS') {
    return {
      ...state,
      news: action.news,
    }
  }
  if (action.type === 'GET_DETAILS') {
    return {
      ...state,
      newsDetail: action.details
    }
  }
  return state;
}

export default rootReducer;