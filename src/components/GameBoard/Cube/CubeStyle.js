import {StyleSheet} from 'react-native';
import {Colors, Screen} from '../../../MainStyle';

const wrapperSize = Screen.width / 5;
const cubeSize = wrapperSize / 2;

const styles = StyleSheet.create({
  wrapper: {
    width: wrapperSize,
    height: wrapperSize,
    position: 'absolute',
  },
  cubeWrapper: {
    width: wrapperSize,
    height: wrapperSize,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cube: {
    opacity: 0.5,
    width: cubeSize,
    height: cubeSize,
  },
  playerHit: {
    backgroundColor: Colors.black,
  },
  playerHot: {
    backgroundColor: Colors.greyA,
  },
});

export {cubeSize, wrapperSize};
export default styles;
