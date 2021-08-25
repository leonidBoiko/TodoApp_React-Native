import React from 'react';
import {View} from 'react-native';
import {Input, Button} from 'react-native-elements';
import Modal from 'react-native-modal';
import THEME from '../../theme';
import styles from './styles';

const CategoryModal = ({showModal, handlerVisibleModal}) => {
  return (
    <Modal isVisible={showModal} animationIn="fadeIn" animationOut="fadeOut">
      <View style={styles.modalBlock}>
        <Input placeholder="" defaultValue="Category 1" selectTextOnFocus />
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
              onPress={handlerVisibleModal}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CategoryModal;
