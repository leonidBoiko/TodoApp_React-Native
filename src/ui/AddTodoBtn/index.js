import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const AddTodoBtn = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.iconWrap}
        onPress={() => navigation.navigate('CreateTodo')}>
        <Ionicons name="md-add" size={50} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default AddTodoBtn;
