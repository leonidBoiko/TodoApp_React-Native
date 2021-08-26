import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  listItem: {
    borderTopWidth: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  listItemText: {
    fontSize: 20,
    fontWeight: '600',
  },
  btn: {
    flexDirection: 'row',
    borderTopWidth: 1,
    padding: 10,
  },
  btnText: {
    fontSize: 20,
    marginLeft: 20,
  },
  modalBlock: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  modalBtn: {
    width: 100,
  },
  hideItem: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: '100%',
  },
});

export default styles;
