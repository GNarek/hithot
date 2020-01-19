import React from 'react';
import {View} from 'react-native';

import styles from './BoardStyle';

const HalfBoard = ({style = {}}) => {
  return <View style={[styles.wrapper, style]} />;
};

export default HalfBoard;
