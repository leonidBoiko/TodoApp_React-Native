import {StyleSheet} from 'react-native';
import THEME from '../../theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    right: 0,
    left: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: THEME.DARK,
    height: 60,
  },
  input: {
    zIndex: 1,
    paddingLeft: 10,
    borderRadius: 50,
    padding: 5,
    width: 300,
    backgroundColor: 'white',
  },
});

export default styles;
