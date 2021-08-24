import React from 'react';
import {SwipeListView} from 'react-native-swipe-list-view';
import {TodoContext} from '../../context/todo/todoContext';
import ItemList from './ItemList';
import ItemHidden from './ItemHidden';
import {View} from 'react-native';
import AddTodoBtn from '../../ui/AddTodoBtn';

const TaskList = () => {
  const {todos} = React.useContext(TodoContext);

  return (
    <View>
      <SwipeListView
        data={todos}
        keyExtractor={item => item.id}
        leftOpenValue={50}
        rightOpenValue={-50}
        contentContainerStyle={{padding: 10}}
        renderHiddenItem={({item}, _) => <ItemHidden item={item} />}
        renderItem={({item}) => <ItemList item={item} />}
      />
      <AddTodoBtn />
    </View>
  );
};

export default TaskList;
