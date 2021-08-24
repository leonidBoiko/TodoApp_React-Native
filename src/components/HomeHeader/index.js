import React from 'react';
import {View, Text, TouchableOpacity, Animated} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './styles';
import HomeSearch from '../HomeSearch';

const HomeHeader = () => {
  const opacity = React.useRef(new Animated.Value(0)).current;
  const translateY = React.useRef(new Animated.Value(-60)).current;
  const [showSearch, setShowSearch] = React.useState(true);

  const animate = () => {
    Animated.timing(opacity, {
      toValue: showSearch ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
    Animated.timing(translateY, {
      toValue: showSearch ? 0 : -60,
      duration: 0,
      useNativeDriver: true,
    }).start();
    setShowSearch(!showSearch);
  };

  return (
    <View style={styles.container}>
      <Picker
        style={styles.picker}
        mode="dialog"
        dropdownIconRippleColor="purple"
        dropdownIconColor="red">
        <Picker.Item label="All categories" value="all" />
        <Picker.Item label="Java Script" value="js" />
        <Picker.Item label="Python" value="p" />
      </Picker>
      <TouchableOpacity onPress={animate} style={styles.textWrap}>
        <Text style={styles.text}>Search</Text>
      </TouchableOpacity>
      <HomeSearch {...{animate, opacity, translateY}} />
    </View>
  );
};

export default HomeHeader;
