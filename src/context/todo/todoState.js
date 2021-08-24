import React from 'react';
import {ADD_TODO, REMOVE_TODO, UPDATE_TODO} from '../types';
import {TodoContext} from './todoContext';
import {todoReducer} from './todoReducer';

export const TodoState = ({children}) => {
  const initState = {
    todos: [
      {id: 1, text: 'Some text'},
      {id: 2, text: 'Some text'},
      {id: 3, text: 'Some text'},
      {id: 4, text: 'Some text'},
      {id: 5, text: 'Some text'},
      {id: 6, text: 'Some text'},
      {id: 7, text: 'Some text'},
      {id: 8, text: 'Some text'},
    ],
  };
  const [state, dispatch] = React.useReducer(todoReducer, initState);
  const addTodo = text => dispatch({type: ADD_TODO, text});
  const removeTodo = id => dispatch({type: REMOVE_TODO, id});
  const updateTodo = (id, title) => dispatch({type: UPDATE_TODO, id, title});
  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        addTodo,
        removeTodo,
        updateTodo,
      }}>
      {children}
    </TodoContext.Provider>
  );
};
