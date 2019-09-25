import { FETCH_NEWS } from '../actions/types';

const initialState = {
  newsList: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_NEWS:
      return {
        ...state,
        newsList: action.payload
      }
      default:
        return state;
  }
}