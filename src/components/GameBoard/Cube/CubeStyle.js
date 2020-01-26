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
    opacity: 0.5,
    width: cubeSize,
    height: cubeSize,
  },
  playerHit: {
    backgroundColor: AppStore.settings.hit.backgroundColor,
  },
  playerHot: {
    backgroundColor: AppStore.settings.hot.backgroundColor,
  },
});

export {cubeSize, wrapperSize};
export default styles;
