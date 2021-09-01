import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const ItemList = ({item}) => {
  return (
    <View style={styles.itemContainer}>
      <Text numberOfLines={1} style={[styles.itemText, styles.itemTitle]}>
        {item.title}
      </Text>
      <Text style={styles.itemText} numberOfLines={2}>
        {item.text}
      </Text>
    </View>
  );
};

export default ItemList;
