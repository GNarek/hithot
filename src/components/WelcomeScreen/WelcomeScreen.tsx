import React, {useCallback} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {IPoints} from '../../types';

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
        <View style={styles.startWrapper}>
          <TouchableOpacity style={styles.cube} onPress={_handleOnPress}>
            <View />
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
