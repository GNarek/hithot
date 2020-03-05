import {StyleSheet} from 'react-native';
import mainStyle, {Colors, Screen} from '../../MainStyle';

const height = 10;

const styles = StyleSheet.create({
  separationLine: {
    height: `${height}%`,
    top: `${50 - height / 2}%`,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    justifyContent: 'center',
    width: '100%',
    position: 'absolute',
  },
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
