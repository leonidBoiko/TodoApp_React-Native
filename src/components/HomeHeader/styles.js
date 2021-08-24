import {StyleSheet} from 'react-native';
import THEME from '../../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: THEME.DARK,
    height: THEME.HEADER_SIZE,
  },
  picker: {
    width: 200,
    color: 'white',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  textWrap: {
    paddingRight: 20,
  },
});

export default styles;
