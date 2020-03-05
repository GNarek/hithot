import React from 'react';
import {View, Image, Platform} from 'react-native';

import HalfBoard from './Board/Board';
import commonStyles from '../../MainStyle';
import styles from './BackgroundBoardStyle';

const imageHitHot = require('../../assets/images/hithot-transparent.png');

const blurRadius = Platform.select({
  ios: 4,
  android: 1.5,
});

const BackgroundBoard = () => {
  return (
    <View style={commonStyles.fullScreen}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={imageHitHot}
        blurRadius={blurRadius}
      />
      <HalfBoard style={commonStyles.rotate} />
      <HalfBoard />
    </View>
  );
};

export default BackgroundBoard;
