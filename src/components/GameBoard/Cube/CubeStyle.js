import {StyleSheet} from 'react-native';
import {Screen} from '../../../MainStyle';
import AppStore from '../../../Store/Store';

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
    opacity: 0.7,
    width: cubeSize,
    height: cubeSize,
  },
});

export {cubeSize, wrapperSize};
export default styles;
