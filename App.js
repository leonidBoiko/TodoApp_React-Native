import React from 'react';
import {StatusBar} from 'react-native';
import {TodoState} from './src/context/todo/todoState';
import {CategoryState} from './src/context/category/categoryState';
import Router from './src/router';
import InitialLayout from './src/layout';

const App = () => {
  return (
    <CategoryState>
      <TodoState>
        <StatusBar hidden />
        <InitialLayout>
          <Router />
        </InitialLayout>
      </TodoState>
    </CategoryState>
  );
};

export default App;
