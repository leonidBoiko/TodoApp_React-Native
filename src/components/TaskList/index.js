import React, {useLayoutEffect, useState} from 'react';
import {SwipeListView} from 'react-native-swipe-list-view';
import {TodoContext} from '../../context/todo/todoContext';
import ItemList from './ItemList';
import ItemHidden from './ItemHidden';
import {View} from 'react-native';
import AddTodoBtn from '../../ui/AddTodoBtn';
import HomeHeader from '../HomeHeader';

const TaskList = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(2);
  const {todos} = React.useContext(TodoContext);
  const searchData = todos.filter(item => {
    return (
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.text.toLowerCase().includes(search.toLowerCase())
    );
  });
  const filterData = searchData.filter(item => {
    if (item.category === selectedCategory) {
      return item;
    } else if (selectedCategory === 2) {
      return item;
    }
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => (
        <HomeHeader
          {...{search, setSearch, selectedCategory, setSelectedCategory}}
        />
      ),
    });
  }, [navigation, search, selectedCategory]);

  return (
    <View style={{flex: 1}}>
      <SwipeListView
        data={filterData}
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
