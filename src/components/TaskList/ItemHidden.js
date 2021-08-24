import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {TodoContext} from '../../context/todo/todoContext';
import THEME from '../../theme';
import styles from './styles';

const ItemHidden = ({item}) => {
  const {removeTodo} = React.useContext(TodoContext);

  return (
    <View style={styles.hiddenContainer}>
      <TouchableOpacity onPress={() => removeTodo(item.id)}>
        <Entypo name="trash" size={30} color={THEME.DARK} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Entypo name="edit" size={30} color={THEME.DARK} />
      </TouchableOpacity>
    </View>
  );
};

export default ItemHidden;
