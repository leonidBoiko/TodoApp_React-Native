import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const ItemList = ({item}) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.text}</Text>
    </View>
  );
};

export default ItemList;
