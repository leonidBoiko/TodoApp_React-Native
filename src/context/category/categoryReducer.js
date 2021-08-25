import {ADD_CATEGORY, REMOVE_CATEGORY, UPDATE_CATEGORY} from '../types';

export const categoryReducer = (state, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return {
        ...state,
        categories: [
          {id: Date.now().toString(), title: action.title},
          ...state.categories,
        ],
      };
    case UPDATE_CATEGORY:
      return {
        ...state,
        categories: state.categories.map(item => {
          if (item.id === action.id) {
            item.title = action.title;
          }
          return item;
        }),
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
