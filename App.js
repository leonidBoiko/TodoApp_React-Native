import React from 'react';
import {StatusBar} from 'react-native';
import {TodoState} from './src/context/todo/todoState';
import Router from './src/router';

const App = () => {
  return (
    <TodoState>
      <StatusBar hidden />
      <Router />
    </TodoState>
  );
};

export default App;
