import React, {useCallback} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {IPoints} from '../../types';

import ColorButton from '../ColorButton/ColorButton';
import VibrationButton from '../VibrationButton/VibrationButton';
import styles from './WelcomeScreenStyle';
import mainStyle from '../../MainStyle';

interface IProps {
  points: IPoints;
  onPress: () => void;
}

const WelcomeScreen = ({points, onPress}: IProps) => {
  const _handleOnPress = useCallback(() => {
    onPress();
  }, [onPress]);

  return (
    <View style={styles.wrapper}>
      <View style={styles.boxWrapper}>
        <View style={styles.box}>
          <Text style={[styles.whiteText, mainStyle.rotate]}>
            Hit: {points.hit}
          </Text>
        </View>
        <ColorButton player="hit" />
        <View style={styles.startWrapper}>
          <VibrationButton />
          <TouchableOpacity onPress={_handleOnPress}>
            <View style={styles.startButton}>
              <Text>Start</Text>
            </View>
          </TouchableOpacity>
        </View>
        <ColorButton player="hot" />
        <View style={styles.box}>
          <Text style={styles.whiteText}>Hot: {points.hot}</Text>
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen;
