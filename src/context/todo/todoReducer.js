import {ADD_TODO, REMOVE_TODO, UPDATE_TODO} from '../types';

export const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [{id: Date.now().toString(), text: action.text}, ...state.todos],
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map(item => {
          if (item.id === action.id) {
            item.text = action.text;
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
