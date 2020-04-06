import {StyleSheet} from 'react-native';
import {Colors, Screen} from '../../MainStyle';

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: Screen.width / 32,
  },
  phoneWrapper: {
    width: Screen.width / 8,
    height: Screen.width / 8,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  stickWrapper: {
    height: Screen.width / 8 + 10,
    alignSelf: 'center',
    width: '100%',
    position: 'absolute',
  },
  stick: {
    borderColor: Colors.red,
    borderWidth: 2,
    height: '100%',
    alignSelf: 'center',
    transform: [{rotate: '45deg'}],
  },
  phone: {
    borderColor: Colors.grey7,
    height: '100%',
    borderWidth: 4,
    flex: 2,
  },
  vibrateWrapper: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
  },
  vibrateLarge: {
    borderColor: Colors.grey7,
    width: 1,
    borderWidth: 2,
    height: '70%',
  },
  vibrateSmall: {
    borderColor: Colors.grey7,
    width: 1,
    borderWidth: 2,
    height: '40%',
  },
  textWrapper: {
    borderColor: Colors.grey7,
    borderWidth: 1,
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  whiteText: {
    textAlign: 'center',
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 10,
  },
});

export default styles;
