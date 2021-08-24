import React from 'react';
import {TextInput, TouchableOpacity, Animated, Keyboard} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const HomeSearch = ({opacity, animate, translateY}) => {
  return (
    <Animated.View
      style={[styles.container, {opacity, transform: [{translateY}]}]}>
      <TouchableOpacity
        onPress={() => {
          Keyboard.dismiss();
          animate();
        }}>
        <Ionicons name="arrow-back" size={30} color="white" />
      </TouchableOpacity>
      <TextInput style={styles.input} placeholder="Search" />
    </Animated.View>
  );
};

export default HomeSearch;
