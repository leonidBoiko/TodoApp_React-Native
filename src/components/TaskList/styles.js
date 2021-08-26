import {StyleSheet} from 'react-native';
import THEME from '../../theme';

const styles = StyleSheet.create({
  itemContainer: {
    height: THEME.ITEM_HEIGHT,
    backgroundColor: THEME.BG_ITEM,
    elevation: 10,
    marginBottom: THEME.SPACING,
    padding: THEME.SPACING,
  },
  hiddenContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: THEME.SPACING,
    justifyContent: 'space-between',
    backgroundColor: THEME.BG_HIDE,
    height: THEME.ITEM_HEIGHT,
  },
  itemText: {
    fontSize: THEME.FONT_SIZE,
    color: '#32222B',
  },
  itemTitle: {
    fontSize: THEME.FONT_SIZE + 2,
    fontWeight: '700',
  },
});
export default styles;
