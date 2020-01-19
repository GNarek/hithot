import React, {useState, useEffect, useCallback} from 'react';
import {Animated, Easing, TouchableOpacity, View} from 'react-native';

import {getRandomInt} from '../../../utils/utils';
import {Screen} from '../../../MainStyle';
import styles, {cubeSize, wrapperSize} from './CubeStyle';

interface Props {
  id: string;
  style?: Object;
  isHitPlayer: boolean;
  onPress: (id: string, isClicked: boolean, currentValue: number) => void;
}

const offset = Screen.height - wrapperSize;
const hitSlop = {top: 100, right: 100, bottom: 100, left: 100};

const Cube = ({id, style = {}, onPress, isHitPlayer}: Props) => {
  const [start, end] = isHitPlayer
    ? [-wrapperSize, offset]
    : [offset, -wrapperSize];
  const [fadeAnim] = useState(new Animated.Value(start));
  const speed = getRandomInt(1000, 2000);
  const position = getRandomInt(0, 5) * 2 * cubeSize;

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
  }, [fadeAnim, onPress, id]);

  const background = isHitPlayer ? styles.playerHit : styles.playerHot;

  return (
    <Animated.View
      style={[styles.wrapper, style, {top: fadeAnim, left: position}]}>
      <TouchableOpacity
        hitSlop={hitSlop}
        onPress={_handlePress}
        style={styles.cubeWrapper}>
        <View style={[styles.cube, background]} />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default React.memo(Cube);
