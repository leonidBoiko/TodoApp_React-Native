import React from 'react';
import {Pressable, Text} from 'react-native';
import styles from './styles';

const CategoryListItem = ({item, selected, setSelected}) => {
  const colorText = selected === item.id ? 'orange' : 'black';

  return (
    <Pressable style={styles.listItem} onPress={() => setSelected(item.id)}>
      <Text style={[styles.listItemText, {color: colorText}]}>
        {item.title}
      </Text>
    </Pressable>
  );
};

export default CategoryListItem;
