import React, {useCallback} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {IPoints} from '../../types';

import Settings from '../Settings/Settings';
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
        <Settings />
        <View style={styles.startWrapper}>
          <TouchableOpacity onPress={_handleOnPress}>
            <View style={styles.startButton}>
              <Text>Start</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          <Text style={styles.whiteText}>Hot: {points.hot}</Text>
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen;
