import {StyleSheet} from 'react-native';
import mainStyle, {Colors, Screen} from '../../MainStyle';

const styles = StyleSheet.create({
  wrapper: {
    ...mainStyle.fullScreen,
  },
  name: {
    color: Colors.white,
    fontSize: 18,
    opacity: 0.5,
    fontWeight: '900',
    position: 'absolute',
  },
  hitname: {
    ...mainStyle.rotate,
    top: 0,
    right: 8,
  },
  hotname: {
    bottom: 0,
    left: 8,
  },
  cube: {
    width: Screen.width * 0.1,
    height: Screen.width * 0.1,
    backgroundColor: Colors.black,
    opacity: 0.5,
    position: 'absolute',
  },
});

export default styles;
