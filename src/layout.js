import {useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect} from 'react';
import {CategoryContext} from './context/category/categoryContext';
import {DB} from './db';

const InitialLayout = ({children}) => {
  const {fetchCreateCategory} = useContext(CategoryContext);
  useEffect(
    () =>
      (async () => {
        try {
          await DB.init();
          const firstStart = await AsyncStorage.getItem('First');
          if (!firstStart) {
            fetchCreateCategory('All todo list');
            fetchCreateCategory('No category');
            await AsyncStorage.setItem('First', 'true');
          }
        } catch (error) {
          console.log(error);
        }
      })(),
    [fetchCreateCategory],
  );
  return children;
};

export default InitialLayout;
