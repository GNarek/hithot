import {StyleSheet} from 'react-native';
import {Colors} from '../../MainStyle';

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.5,
  },
  separationLine: {
    flex: 1,
    backgroundColor: Colors.black,
    opacity: 0.3,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: Colors.grey5,
  },
});

export default styles;
