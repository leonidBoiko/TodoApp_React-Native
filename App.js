import React from 'react';
import {StatusBar} from 'react-native';
import {TodoState} from './src/context/todo/todoState';
import {CategoryState} from './src/context/category/categoryState';
import Router from './src/router';

const App = () => {
  return (
    <CategoryState>
      <TodoState>
        <StatusBar hidden />
        <Router />
      </TodoState>
    </CategoryState>
  );
};

export default App;
