import {StyleSheet} from 'react-native';
import {Colors, Screen} from '../../MainStyle';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxWrapper: {
    width: Screen.width / 1.5,
    height: Screen.height / 1.5,
    backgroundColor: 'rgba(100,100,100,0.5)',
  },
  box: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  startWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  startButton: {
    flex: 1,
    marginTop: 20,
    backgroundColor: Colors.grey7,
    width: Screen.width / 4,
    height: Screen.width / 8,
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
