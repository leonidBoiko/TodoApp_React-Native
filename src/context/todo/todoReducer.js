import {ADD_TODO, REMOVE_TODO, UPDATE_TODO, GET_TODO_LIST} from '../types';

export const todoReducer = (state, action) => {
  switch (action.type) {
    case GET_TODO_LIST:
      return {
        ...state,
        todos: action.data,
      };
    case ADD_TODO:
      const {id, title, text, category} = action;
      return {
        ...state,
        todos: [{id, title, text, category}, ...state.todos],
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map(item => {
          if (item.id === action.id) {
            item.text = action.text;
            item.title = action.title;
            item.category = action.category;
          }
          return item;
        }),
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(item => item.id !== action.id),
      };
    default:
      return state;
  }
};
