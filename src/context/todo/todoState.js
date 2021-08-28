import React, {useCallback} from 'react';
import {DB} from '../../db';
import {ADD_TODO, GET_TODO_LIST, REMOVE_TODO, UPDATE_TODO} from '../types';
import {TodoContext} from './todoContext';
import {todoReducer} from './todoReducer';

export const TodoState = ({children}) => {
  const [state, dispatch] = React.useReducer(todoReducer, {todos: []});

  const fetchCreateTodo = async props => {
    try {
      const id = await DB.createTodo(props);
      addTodo({...props, id});
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUpdateTodo = async props => {
    try {
      await DB.updateTodo(props);
      updateTodo(props);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchRemoveTodo = async id => {
    try {
      await DB.removeTodo(id);
      removeTodo(id);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTodoList = useCallback(async () => {
    try {
      const data = await DB.getTodoList();
      getTodoList(data.reverse());
    } catch (error) {
      console.log(error);
    }
  }, []);

  const addTodo = props => dispatch({type: ADD_TODO, ...props});
  const getTodoList = data => dispatch({type: GET_TODO_LIST, data});
  const removeTodo = id => dispatch({type: REMOVE_TODO, id});
  const updateTodo = props => dispatch({type: UPDATE_TODO, ...props});

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        fetchCreateTodo,
        fetchRemoveTodo,
        fetchUpdateTodo,
        fetchTodoList,
      }}>
      {children}
    </TodoContext.Provider>
  );
};
