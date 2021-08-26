import React from 'react';
import {TextInput, TouchableOpacity, Animated, Keyboard} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const HomeSearch = ({opacity, animate, translateY, search, setSearch}) => {
  return (
    <Animated.View
      style={[styles.container, {opacity, transform: [{translateY}]}]}>
      <TouchableOpacity
        onPress={() => {
          Keyboard.dismiss();
          setSearch('');
          animate();
        }}>
        <Ionicons name="arrow-back" size={30} color="white" />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={search}
        onChangeText={text => setSearch(text)}
      />
    </Animated.View>
  );
};

export default HomeSearch;
