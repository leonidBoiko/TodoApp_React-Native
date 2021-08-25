import React, {useContext, useState} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {CategoryContext} from '../../context/category/categoryContext';
import CategoryModal from './CategoryModal';
import styles from './styles';

const CategoryList = () => {
  const {categories} = useContext(CategoryContext);
  const [selected, setSelected] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const handlerVisibleModal = () => setShowModal(!showModal);

  return (
    <View>
      <CategoryModal {...{handlerVisibleModal, showModal}} />
      <FlatList
        data={categories}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          const colorText = selected === item.id ? 'orange' : 'black';
          return (
            <TouchableOpacity
              style={styles.listItem}
              onPress={() => setSelected(item.id)}>
              <Text
                style={[
                  styles.listItemText,
                  {
                    color: colorText,
                  },
                ]}>
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
      <TouchableOpacity style={styles.btn} onPress={handlerVisibleModal}>
        <AntDesign name="pluscircleo" size={30} color="green" />
        <Text style={styles.btnText}>Add category</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryList;
