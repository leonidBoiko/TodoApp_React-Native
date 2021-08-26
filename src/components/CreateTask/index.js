import React from 'react';
import {View, Alert} from 'react-native';
import {Input} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {TodoContext} from '../../context/todo/todoContext';
import {useNavigation} from '@react-navigation/native';
import THEME from '../../theme';
import CreateTodoHeader from '../CreateTodoHeader';
import styles from './styles';

const CreateTask = ({selectCategory, setSelectCategory}) => {
  const {addTodo} = React.useContext(TodoContext);
  const navigation = useNavigation();
  const [title, setTitle] = React.useState('');
  const [value, setValue] = React.useState('');

  const handleAddTask = React.useCallback(() => {
    if (value.trim().length || title.trim().length) {
      addTodo(title, value, selectCategory);
      setValue('');
      setSelectCategory(1);
      navigation.navigate('Home');
    } else {
      Alert.alert('One field must not be empty!');
    }
  }, [value, title, navigation, addTodo, selectCategory, setSelectCategory]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      header: () => <CreateTodoHeader {...{handleAddTask}} />,
    });
  }, [navigation, handleAddTask]);

  return (
    <View style={styles.container}>
      <Input
        value={title}
        onChangeText={setTitle}
        placeholder="Add title"
        inputStyle={{fontWeight: 'bold'}}
        leftIcon={
          <MaterialIcons name="title" size={24} color={THEME.MAIN_COLOR} />
        }
      />
      <Input
        value={value}
        onChangeText={setValue}
        placeholder="Add task"
        multiline
        autoFocus
        inputContainerStyle={{borderBottomWidth: 0}}
        leftIcon={
          <FontAwesome name="tasks" size={24} color={THEME.MAIN_COLOR} />
        }
      />
    </View>
  );
};

export default CreateTask;
