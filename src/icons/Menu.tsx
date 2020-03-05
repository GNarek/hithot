import React from 'react';
import {View, StyleSheet} from 'react-native';
import AppStore from '../Store/Store';
import {getRandomInt} from './../utils/utils';

const styles = StyleSheet.create({
  line: {
    height: 5,
    width: 30,
    backgroundColor: 'white',
    marginBottom: 5,
  },
});

const Menu = () => {
  const backgroundColor = getRandomInt(0, 1)
    ? AppStore.settings.hit.backgroundColor
    : AppStore.settings.hot.backgroundColor;

  return (
    <View>
      <View style={[styles.line, {backgroundColor}]} />
      <View style={[styles.line, {backgroundColor}]} />
      <View style={[styles.line, {backgroundColor}]} />
    </View>
  );
};

export default React.memo(Menu);
