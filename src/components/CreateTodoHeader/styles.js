import {StyleSheet} from 'react-native';
import THEME from '../../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    height: THEME.HEADER_SIZE,
    backgroundColor: THEME.DARK,
  },
  text: {fontSize: 18, fontWeight: 'bold', color: 'white'},
  iconWrap: {alignItems: 'center'},
  iconText: {color: 'white', marginTop: -5},
});

export default styles;
