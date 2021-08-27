import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TaskList from '../components/TaskList';
import CreateTask from '../components/CreateTask';
import CategoryList from '../components/CategoryList';
import THEME from '../theme';

const Stack = createNativeStackNavigator();

export default function Router() {
  const [selectCategory, setSelectCategory] = useState(2);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={TaskList} />
        <Stack.Screen name="CreateTodo">
          {props => (
            <CreateTask {...props} {...{selectCategory, setSelectCategory}} />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Category"
          options={{
            title: 'Change category',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: THEME.DARK,
            },
            headerTitleStyle: {color: 'white'},
          }}>
          {props => (
            <CategoryList {...props} {...{selectCategory, setSelectCategory}} />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
