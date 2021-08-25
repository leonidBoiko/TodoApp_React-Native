import React from 'react';
import {ADD_CATEGORY, REMOVE_CATEGORY, UPDATE_CATEGORY} from '../types';
import {CategoryContext} from './categoryContext';
import {categoryReducer} from './categoryReducer';

export const CategoryState = ({children}) => {
  const initState = {
    categories: [
      {id: 1, title: 'No category'},
      {id: 2, title: 'Python'},
      {id: 3, title: 'Java Script'},
    ],
  };
  const [state, dispatch] = React.useReducer(categoryReducer, initState);
  // const addTodo = text => dispatch({type: ADD_TODO, text});
  // const removeTodo = id => dispatch({type: REMOVE_TODO, id});
  // const updateTodo = (id, title) => dispatch({type: UPDATE_TODO, id, title});
  return (
    <CategoryContext.Provider
      value={{
        categories: state.categories,
      }}>
      {children}
    </CategoryContext.Provider>
  );
};
