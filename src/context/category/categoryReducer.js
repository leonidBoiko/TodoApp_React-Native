import {ADD_CATEGORY, REMOVE_CATEGORY, GET_CATEGORY_LIST} from '../types';

export const categoryReducer = (state, action) => {
  switch (action.type) {
    case GET_CATEGORY_LIST:
      return {
        ...state,
        categories: action.data,
      };
    case ADD_CATEGORY:
      return {
        ...state,
        categories: [{id: action.id, title: action.title}, ...state.categories],
      };
    case REMOVE_CATEGORY:
      return {
        ...state,
        categories: state.categories.filter(item => item.id !== action.id),
      };
    default:
      return state;
  }
};
