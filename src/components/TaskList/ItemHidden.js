import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {TodoContext} from '../../context/todo/todoContext';
import THEME from '../../theme';
import styles from './styles';

const ItemHidden = ({item}) => {
  const {fetchRemoveTodo} = React.useContext(TodoContext);
  const navigation = useNavigation();
  return (
    <View style={styles.hiddenContainer}>
      <TouchableOpacity onPress={() => fetchRemoveTodo(item.id)}>
        <Entypo name="trash" size={30} color={THEME.DARK} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('CreateTodo', {item})}>
        <Entypo name="eye" size={30} color={THEME.DARK} />
      </TouchableOpacity>
    </View>
  );
};

export default ItemHidden;
