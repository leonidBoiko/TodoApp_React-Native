import React from 'react';
import {Pressable, Text} from 'react-native';
import styles from './styles';

const CategoryListItem = ({item, selectCategory, setSelectCategory}) => {
  const colorText = selectCategory === item.id ? 'orange' : 'black';

  return (
    <Pressable
      style={styles.listItem}
      onPress={() => setSelectCategory(item.id)}>
      <Text style={[styles.listItemText, {color: colorText}]}>
        {item.title}
      </Text>
    </Pressable>
  );
};

export default CategoryListItem;
