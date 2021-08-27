import React, {useCallback} from 'react';
import {DB} from '../../db';
import {ADD_CATEGORY, REMOVE_CATEGORY, GET_CATEGORY_LIST} from '../types';
import {CategoryContext} from './categoryContext';
import {categoryReducer} from './categoryReducer';

export const CategoryState = ({children}) => {
  const fetchCategoryList = useCallback(async () => {
    try {
      const data = await DB.getCategories();
      getCategories(data.reverse());
    } catch (e) {
      console.log(e);
    }
  }, []);

  const fetchCreateCategory = async title => {
    try {
      const id = await DB.createCategory(title);
      if (id) {
        addCategory(id, title);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchRemoveCategory = async id => {
    try {
      await DB.removeCategory(id);
      removeCategory(id);
    } catch (error) {
      console.log(error);
    }
  };

  const [state, dispatch] = React.useReducer(categoryReducer, {categories: []});
  const getCategories = data => dispatch({type: GET_CATEGORY_LIST, data});
  const addCategory = (id, title) => dispatch({type: ADD_CATEGORY, id, title});
  const removeCategory = id => dispatch({type: REMOVE_CATEGORY, id});

  return (
    <CategoryContext.Provider
      value={{
        categories: state.categories,
        fetchCreateCategory,
        fetchRemoveCategory,
        fetchCategoryList,
      }}>
      {children}
    </CategoryContext.Provider>
  );
};
