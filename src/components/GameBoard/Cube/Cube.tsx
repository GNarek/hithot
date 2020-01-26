import React, {useState, useEffect, useCallback} from 'react';
import {Animated, Easing, View, Vibration, Platform} from 'react-native';

import AppStore from '../../../Store/Store';
import Button from '../../Button/Button';
import {getRandomInt} from '../../../utils/utils';
import {Screen} from '../../../MainStyle';
import styles, {cubeSize, wrapperSize} from './CubeStyle';

interface IProps {
  id: string;
  style?: Object;
  isHitPlayer: boolean;
  onPress: (id: string, isClicked: boolean, currentValue: number) => void;
}

const offset = Screen.height - wrapperSize;
const hitSlop = {top: 10, right: 10, bottom: 10, left: 10};
const vibrationPattern = Platform.select({
  ios: [0],
  android: [0, 100],
}) as number[];

const defaultProps = {
  isHitPlayer: false,
  id: '',
  onPress: () => {},
};

const Cube = (props: IProps = defaultProps) => {
  const {id, style = {}, onPress, isHitPlayer} = props;
  const [start, end] = isHitPlayer
    ? [-wrapperSize, offset]
    : [offset, -wrapperSize];
  const [fadeAnim] = useState(new Animated.Value(start));
  const speed = getRandomInt(1000, 4000);
  const position = getRandomInt(0, 4) * 2 * cubeSize;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: end,
      easing: Easing.linear,
      duration: speed,
    }).start(() => {
      onPress(id, false, 0);
    });

    // return () => {
    //   console.log('unmount:', id);
    // };
  }, [fadeAnim, speed, id, onPress, end]);

  const _handlePress = useCallback(() => {
    // @ts-ignore
    const currentValue = fadeAnim.__getValue();
    onPress(id, true, currentValue);
    if (AppStore.settings.vibrationEnabled) {
      Vibration.vibrate(vibrationPattern);
    }
  }, [fadeAnim, onPress, id]);

  const background = {
    backgroundColor: isHitPlayer
      ? AppStore.settings.hit.backgroundColor
      : AppStore.settings.hot.backgroundColor,
  };

  return (
    <Animated.View
      style={[styles.wrapper, style, {top: fadeAnim, left: position}]}>
      <Button
        hitSlop={hitSlop}
        onPress={_handlePress}
        style={styles.cubeWrapper}>
        <View style={[styles.cube, background]} />
      </Button>
    </Animated.View>
  );
};

export default React.memo(Cube);
