import React, {useState, useEffect, useContext} from 'react';
import {View} from 'react-native';
import {Input, Button} from 'react-native-elements';
import Modal from 'react-native-modal';
import {CategoryContext} from '../../context/category/categoryContext';
import THEME from '../../theme';
import styles from './styles';

const CategoryModal = ({showModal, handlerVisibleModal}) => {
  const {categories, fetchCreateCategory} = useContext(CategoryContext);
  const [value, setValue] = useState('');
  const [inputError, setInputError] = useState('');

  useEffect(() => {
    setValue('Category 1');
    setInputError('');
  }, [showModal]);

  const handlerSave = () => {
    if (!value.trim().length) {
      setInputError('The field must not be empty');
    } else if (categories.some(item => item.title === value)) {
      setInputError('This category is already in use');
    } else {
      fetchCreateCategory(value.trim());
      handlerVisibleModal();
    }
  };

  return (
    <Modal isVisible={showModal} animationIn="fadeIn" animationOut="fadeOut">
      <View style={styles.modalBlock}>
        <Input
          value={value}
          onChangeText={text => {
            setValue(text);
            inputError.length && setInputError('');
          }}
          errorStyle={{fontSize: 14, fontWeight: '600'}}
          selectTextOnFocus
          errorMessage={inputError}
        />
        <View style={styles.modalButtons}>
          <View style={styles.modalBtn}>
            <Button
              type="outline"
              title="Cancel"
              buttonStyle={{borderColor: THEME.DARK}}
              titleStyle={{color: THEME.DARK}}
              onPress={handlerVisibleModal}
            />
          </View>
          <View style={styles.modalBtn}>
            <Button
              buttonStyle={{backgroundColor: THEME.DARK}}
              title="Save"
              onPress={handlerSave}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CategoryModal;
