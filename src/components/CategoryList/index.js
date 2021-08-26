import React, {useContext, useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {CategoryContext} from '../../context/category/categoryContext';
import CategoryListItem from './CategoryListItem';
import CategoryModal from './CategoryModal';
import CategoryHideItemList from './CategoryHideItemList';
import styles from './styles';

const CategoryList = props => {
  const {categories} = useContext(CategoryContext);
  const [showModal, setShowModal] = useState(false);
  const handlerVisibleModal = () => setShowModal(!showModal);

  return (
    <View>
      <CategoryModal {...{handlerVisibleModal, showModal}} />
      <SwipeListView
        data={categories}
        leftOpenValue={50}
        rightOpenValue={0}
        keyExtractor={item => item.id}
        renderItem={({item}) => <CategoryListItem {...props} item={item} />}
        renderHiddenItem={({item}, _) => (
          <CategoryHideItemList {...props} item={item} />
        )}
      />
      <TouchableOpacity style={styles.btn} onPress={handlerVisibleModal}>
        <AntDesign name="pluscircleo" size={30} color="green" />
        <Text style={styles.btnText}>Add category</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryList;
