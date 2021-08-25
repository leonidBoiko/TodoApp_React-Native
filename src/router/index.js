import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TaskList from '../components/TaskList';
import HomeHeader from '../components/HomeHeader';
import CreateTask from '../components/CreateTask';
import CategoryList from '../components/CategoryList';
import THEME from '../theme';

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={TaskList}
          options={{header: () => <HomeHeader />}}
        />
        <Stack.Screen name="CreateTodo" component={CreateTask} />
        <Stack.Screen
          name="Category"
          component={CategoryList}
          options={{
            title: 'Change category',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: THEME.DARK,
            },
            headerTitleStyle: {color: 'white'},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
