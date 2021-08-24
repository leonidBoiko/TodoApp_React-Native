import {StyleSheet} from 'react-native';
import THEME from '../../theme';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    zIndex: 1,
  },
  iconWrap: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.DARK,
    borderRadius: 50,
    height: 60,
    width: 60,
    elevation: 10,
  },
});

export default styles;
