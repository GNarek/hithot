import {StyleSheet, Dimensions} from 'react-native';

const Colors = {
  red: '#9F1903',
  white: '#fff',
  black: '#000',
  grey1: '#111',
  grey2: '#222',
  grey3: '#333',
  grey4: '#444',
  grey5: '#555',
  grey6: '#666',
  grey7: '#777',
  grey8: '#888',
  grey9: '#999',
  greyA: '#aaa',
  greyB: '#bbb',
  greyC: '#ccc',
  greyD: '#ddd',
  greyE: '#eee',
};

const Screen = {
  width: Dimensions.get('screen').width,
  height: Dimensions.get('screen').height,
};

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  border: {
    borderColor: Colors.black,
    borderWidth: 1,
  },
  rotate: {
    transform: [{rotate: '180deg'}],
  },
  fullScreen: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
});

export {Colors, Screen};
export default styles;
