import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {CategoryContext} from '../../context/category/categoryContext';
import THEME from '../../theme';
import styles from './styles';

export default function CategoryHideItemList({item, setSelectCategory}) {
  const {fetchRemoveCategory} = useContext(CategoryContext);
  const handleDelete = () => {
    fetchRemoveCategory(item.id);
    setSelectCategory(2);
  };

  return (
    <TouchableOpacity style={styles.hideItem} onPress={handleDelete}>
      {item.id !== 2 && <Ionicons name="trash" size={30} color={THEME.DARK} />}
    </TouchableOpacity>
  );
}
