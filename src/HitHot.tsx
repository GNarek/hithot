import React from 'react';
import {View} from 'react-native';

import BackgroundBoard from './components/BackgroundBoard/BackgroundBoard';
import GameBoard from './components/GameBoard/GameBoard';
import styles from './MainStyle';

const HitHot = () => {
  return (
    <View style={styles.flex1}>
      <BackgroundBoard />
      <GameBoard />
    </View>
  );
};

export default HitHot;
