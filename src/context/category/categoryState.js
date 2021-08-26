import React from 'react';
import {ADD_CATEGORY, REMOVE_CATEGORY} from '../types';
import {CategoryContext} from './categoryContext';
import {categoryReducer} from './categoryReducer';

export const CategoryState = ({children}) => {
  const initState = {
    categories: [{id: 1, title: 'No category'}],
  };
  const [state, dispatch] = React.useReducer(categoryReducer, initState);
  const addCategory = title => dispatch({type: ADD_CATEGORY, title});
  const removeCategory = id => dispatch({type: REMOVE_CATEGORY, id});

  return (
    <CategoryContext.Provider
      value={{
        categories: state.categories,
        addCategory,
        removeCategory,
      }}>
      {children}
    </CategoryContext.Provider>
  );
};
