import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const CreateTodoHeader = ({handleAddTask}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.iconWrap}
        onPress={() => navigation.navigate('Category')}>
        <Ionicons name="list-sharp" color="white" size={25} />
        <Text style={styles.iconText}>Category</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleAddTask}>
        <Text style={styles.text}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateTodoHeader;
