const initState = {
  news: [],
  newsDetail: []
}

const rootReducer = (state = initState, action) => {
  if (action.type === 'GET_NEWS') {
    return {
      ...state,
      news: action.news,
    }
  }
  return state;
}

export default rootReducer;