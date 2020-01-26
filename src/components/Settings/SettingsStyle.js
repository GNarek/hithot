import {StyleSheet} from 'react-native';
import {Colors, Screen} from '../../MainStyle';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cube: {
    backgroundColor: Colors.grey1,
    width: Screen.width / 4,
    height: Screen.width / 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: {
    color: Colors.white,
    fontWeight: '900',
    fontSize: 20,
  },
});

export default styles;
