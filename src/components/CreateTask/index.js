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
  const {fetchCreateTodo} = React.useContext(TodoContext);
  const navigation = useNavigation();
  const [title, setTitle] = React.useState('');
  const [text, setText] = React.useState('');

  const handleAddTask = React.useCallback(() => {
    if (text.trim().length || title.trim().length) {
      fetchCreateTodo({title, text, category: selectCategory});
      setText('');
      setSelectCategory(2);
      navigation.navigate('Home');
    } else {
      Alert.alert('One field must not be empty!');
    }
  }, [
    text,
    title,
    navigation,
    fetchCreateTodo,
    selectCategory,
    setSelectCategory,
  ]);

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
        value={text}
        onChangeText={setText}
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
