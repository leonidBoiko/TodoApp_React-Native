import React from 'react';
import {ADD_TODO, REMOVE_TODO, UPDATE_TODO} from '../types';
import {TodoContext} from './todoContext';
import {todoReducer} from './todoReducer';

export const TodoState = ({children}) => {
  const [state, dispatch] = React.useReducer(todoReducer, {todos: []});
  const addTodo = (title, text, category) => {
    dispatch({type: ADD_TODO, text, title, category});
  };
  const removeTodo = id => dispatch({type: REMOVE_TODO, id});
  const updateTodo = (id, title, text, category) => {
    dispatch({type: UPDATE_TODO, id, title, text, category});
  };

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
